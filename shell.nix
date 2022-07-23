{ pkgs ? import <nixpkgs> {}
}:
pkgs.mkShell {
    name="dev";
    buildInputs = [
        pkgs.nodejs-16_x
    ];
    shellHook = ''
        echo "Installing dependencies using npm, please wait."
        npm i
        echo "You can now "run npm run dev" to start a dev server."
    '';
}