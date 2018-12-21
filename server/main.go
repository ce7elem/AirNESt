package main

import (
	"log"
	"os/exec"
	"os"
	"net/http"

	"github.com/gorilla/websocket"
	"github.com/fatih/color"
)

var clients = make(map[*websocket.Conn]bool) // connected clients
var broadcast = make(chan Message)           // broadcast channel

// Configure the upgrader
var upgrader = websocket.Upgrader{
	CheckOrigin: func(r *http.Request) bool {
		return true
	},
}

// Define our message object
type Message struct {
	Room	string `json:"room"`
	Id		string `json:"id"`
	Input	string `json:"input"`
}

func main() {

	output, err := exec.Command("cat", "banner.ascii").CombinedOutput()
	if err != nil {
	  os.Stderr.WriteString(err.Error())
	}
	color.White(string(output))

	// Create a simple file server
	fs := http.FileServer(http.Dir("public"))
	http.Handle("/", fs)

	// Configure websocket route
	http.HandleFunc("/ws", handleConnections)

	// Start listening for incoming chat messages
	go handleMessages()

	// Start the server on localhost port 8000 and log any errors
	color.Magenta("http server started on :8080")
	err = http.ListenAndServe(":8080", nil)
	if err != nil {
		color.Red("ListenAndServe: ", err)
	}
}




func handleConnections(w http.ResponseWriter, r *http.Request) {
	// Upgrade initial GET request to a websocket
	ws, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Fatal(err)
	}
	// Make sure we close the connection when the function returns
	defer ws.Close()
	color.Green("[new connected]")
	for {
		var msg Message
		// Read in a new message as JSON and map it to a Message object
		err := ws.ReadJSON(&msg)
		if err != nil {
			color.Yellow("error: %v", err)
			delete(clients, ws)
			break
		}
		// Send the newly received message to the broadcast channel
		broadcast <- msg
	}
}

func handleMessages() {
	for {
		// Grab the next message from the broadcast channel
		msg := <-broadcast
		// Send it out to every client that is currently connected
		for client := range clients {
			err := client.WriteJSON(msg)
			if err != nil {
				color.Yellow("error: %v", err)
				client.Close()
				delete(clients, client)
			}
		}
	}
}
