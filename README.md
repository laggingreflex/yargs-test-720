
 This is a cli tool to demo that it can't get `yargs` to infer `yargs-parser` configuration settings from its `package.json`.

It's supposed to utilize the setting:
```json
"duplicate-arguments-array": false
```
which is configured in its [`package.json`](package.json).

Install this module as a global module (clone it and do `npm link`).

Then in the terminal:

```
cd ~ # or somewhere away from this repo dir
yargs-test-720 -x 1 -x 2 -x 3
[ 1, 2, 3 ]
```

It should output `3` if it were to utilize the above setting, but it outputs `[ 1, 2, 3 ]`

It only works if you run it from this repo dir.
```
cd # this repo dir
yargs-test-720 -x 1 -x 2 -x 3
3
```


[`read-pkg-up`][read-pkg-up] works from current dir and so it can't find this repo's package.json and neither the `duplicate-arguments-array` setting if this cli-tool's command is invoked from `~` or some other directory.

[read-pkg-up]: https://www.npmjs.com/package/read-pkg-up
