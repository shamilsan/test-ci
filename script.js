const exec = require('child_process');

exec('pkill -f \'gear |gear$\' -9', (err, stdout, stderr) => {
  if (err) {
    console.log(`JS_TEST: Unable to execute kill command (${err})`);
  }

  if (exitCode == 0) {
    console.log('JS_TEST: ✅ Test passed');
  } else {
    console.log(`JS_TEST: ❌ Test failed (${exitCode})`);
  }
  process.exit(exitCode);
});
