var nes;
$(function() {
  nes = new JSNES({
    'ui': $('#emulator').JSNESUI({
      "Installed": [
        ['Super Mario Bros 3', 'roms/Super-Mario-Bros-3-(E).nes'],
      ],
    })
  });
});