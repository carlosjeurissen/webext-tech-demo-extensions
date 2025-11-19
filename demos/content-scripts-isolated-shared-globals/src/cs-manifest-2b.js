const csManifest2bGlobal = true;
window.csManifest2b = true;

setTimeout(() => {
  console.log('csManifest2b', [
    typeof csManifest1aGlobal !== 'undefined',
    typeof window.csManifest1a !== 'undefined',
    typeof csManifest1bGlobal !== 'undefined',
    typeof window.csManifest1b !== 'undefined',
    typeof csManifest2bGlobal !== 'undefined',
    typeof window.csManifest2b !== 'undefined',
    typeof csManifest2bGlobal !== 'undefined',
    typeof window.csManifest2b !== 'undefined',
    typeof csRegister1aGlobal !== 'undefined',
    typeof window.csRegister1a !== 'undefined',
    typeof csRegister1bGlobal !== 'undefined',
    typeof window.csRegister1b !== 'undefined',
    typeof csRegister2bGlobal !== 'undefined',
    typeof window.csRegister2b !== 'undefined',
    typeof csRegister2bGlobal !== 'undefined',
    typeof window.csRegister2b !== 'undefined',
  ]);
}, 1e3);
