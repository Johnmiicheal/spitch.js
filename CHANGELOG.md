# Changelog

## 0.1.0-alpha.11 (2025-09-27)

Full Changelog: [v0.1.0-alpha.10...v0.1.0-alpha.11](https://github.com/Johnmiicheal/spitch.js/compare/v0.1.0-alpha.10...v0.1.0-alpha.11)

### Bug Fixes

* coerce nullable values to undefined ([8161ada](https://github.com/Johnmiicheal/spitch.js/commit/8161ada868696881a461e1e1d61c6a68187aa32c))


### Performance Improvements

* faster formatting ([707a99e](https://github.com/Johnmiicheal/spitch.js/commit/707a99e32c583116fdc54e2e63a8478d35a4ae0a))


### Chores

* ci build action ([a833866](https://github.com/Johnmiicheal/spitch.js/commit/a83386611f61d17ab8147a5baedb72bb4224515f))
* do not install brew dependencies in ./scripts/bootstrap by default ([2c99a25](https://github.com/Johnmiicheal/spitch.js/commit/2c99a25c1d7b8657595328ace2a6ca103e3931ec))
* **internal:** codegen related update ([2252cdb](https://github.com/Johnmiicheal/spitch.js/commit/2252cdb1a564a7a9ae1a1fa44a285fb16d445771))
* **internal:** fix incremental formatting in some cases ([dbc7054](https://github.com/Johnmiicheal/spitch.js/commit/dbc7054dd0b7e57218b5bcf76416f5d0f9cc042d))
* **internal:** ignore .eslintcache ([847b310](https://github.com/Johnmiicheal/spitch.js/commit/847b310b8a0008b3885fb76f2fcc2ab45ee18d10))
* **internal:** remove deprecated `compilerOptions.baseUrl` from tsconfig.json ([b4aec73](https://github.com/Johnmiicheal/spitch.js/commit/b4aec732823f78cb11aa0265271a59fd6111eb85))

## 0.1.0-alpha.10 (2025-08-23)

Full Changelog: [v0.1.0-alpha.9...v0.1.0-alpha.10](https://github.com/Johnmiicheal/spitch.js/compare/v0.1.0-alpha.9...v0.1.0-alpha.10)

### Chores

* **deps:** update dependency node-fetch to v2.6.13 ([f2ef200](https://github.com/Johnmiicheal/spitch.js/commit/f2ef200b51cd4a79c7063e85af61100fdf10ffc6))
* **internal:** formatting change ([9dc8052](https://github.com/Johnmiicheal/spitch.js/commit/9dc805298229eb8f5a707d0c3ff0939446039667))
* **internal:** move publish config ([7bc3dca](https://github.com/Johnmiicheal/spitch.js/commit/7bc3dca9297215e4af33b331a4376720aef967bc))
* **internal:** remove redundant imports config ([765d97f](https://github.com/Johnmiicheal/spitch.js/commit/765d97f7841b4703987dad9c7ecc0fd63cabf90a))
* **internal:** update comment in script ([888d849](https://github.com/Johnmiicheal/spitch.js/commit/888d84933cdaa7e75fa43366918c09c1bdb33f46))
* update @stainless-api/prism-cli to v5.15.0 ([5f118b0](https://github.com/Johnmiicheal/spitch.js/commit/5f118b0ffa8660db4d5fcf5f723259a645327fde))
* update CI script ([e07f1b0](https://github.com/Johnmiicheal/spitch.js/commit/e07f1b09f16bca2c5f7f06df9966c645f697d4e9))

## 0.1.0-alpha.9 (2025-07-15)

Full Changelog: [v0.1.0-alpha.8...v0.1.0-alpha.9](https://github.com/Johnmiicheal/spitch.js/compare/v0.1.0-alpha.8...v0.1.0-alpha.9)

### Features

* clean up environment call outs ([4210498](https://github.com/Johnmiicheal/spitch.js/commit/4210498ddd03c7f270c13620b8e3b05d3f53164c))


### Bug Fixes

* **ci:** release-doctor — report correct token name ([c3b97d6](https://github.com/Johnmiicheal/spitch.js/commit/c3b97d6defc9de550a5fdec4bef16807cfd9f29f))
* **client:** don't send `Content-Type` for bodyless methods ([f02514c](https://github.com/Johnmiicheal/spitch.js/commit/f02514c3ee4dc2bc5be81eb3d984d61476c71402))


### Chores

* **ci:** only run for pushes and fork pull requests ([5812d40](https://github.com/Johnmiicheal/spitch.js/commit/5812d401fedef7fb7847d44fe5f5985a0777e3a6))
* make some internal functions async ([b48a2ce](https://github.com/Johnmiicheal/spitch.js/commit/b48a2ce952c30bb1f2149e368d9d450d3db0121a))
* mention unit type in timeout docs ([138ad3c](https://github.com/Johnmiicheal/spitch.js/commit/138ad3ca9efe7adb214fbf6f848280e1e2b9e8db))

## 0.1.0-alpha.8 (2025-06-17)

Full Changelog: [v0.1.0-alpha.7...v0.1.0-alpha.8](https://github.com/Johnmiicheal/spitch.js/compare/v0.1.0-alpha.7...v0.1.0-alpha.8)

### Features

* **client:** add support for endpoint-specific base URLs ([21cb1c4](https://github.com/Johnmiicheal/spitch.js/commit/21cb1c4ab575a902218b40924b9d89b908ffe8fa))


### Bug Fixes

* publish script — handle NPM errors correctly ([f16a4b4](https://github.com/Johnmiicheal/spitch.js/commit/f16a4b44f889dde7f3ed07d44797e1baaf9f4c2b))


### Chores

* **ci:** enable for pull requests ([d25a874](https://github.com/Johnmiicheal/spitch.js/commit/d25a874937471c5ca39d5efab29a12ec976a83cf))
* **internal:** make base APIResource abstract ([92c6227](https://github.com/Johnmiicheal/spitch.js/commit/92c6227fa999304099da9e294f3f31fd86d36902))

## 0.1.0-alpha.7 (2025-06-04)

Full Changelog: [v0.1.0-alpha.6...v0.1.0-alpha.7](https://github.com/Johnmiicheal/spitch.js/compare/v0.1.0-alpha.6...v0.1.0-alpha.7)

### Chores

* **ci:** add timeout thresholds for CI jobs ([14aa7ef](https://github.com/Johnmiicheal/spitch.js/commit/14aa7ef490303a5d1a5330468891454601d42eb4))
* **ci:** bump node version for release workflows ([692ad8f](https://github.com/Johnmiicheal/spitch.js/commit/692ad8fb35a8356c0916095124411816e7a98ce4))
* **ci:** only use depot for staging repos ([abb297e](https://github.com/Johnmiicheal/spitch.js/commit/abb297e887b6093d8faf77c81f5759540a139685))
* **client:** minor internal fixes ([0858695](https://github.com/Johnmiicheal/spitch.js/commit/085869551ac3a3f6505cca1aff09fa34d47f7879))
* **docs:** grammar improvements ([04750af](https://github.com/Johnmiicheal/spitch.js/commit/04750af15c0816ebd0501a99c1c0628837b958c7))
* **docs:** use top-level-await in example snippets ([12efd22](https://github.com/Johnmiicheal/spitch.js/commit/12efd22bd26cdc900064e4b59d2354bb6b7e500e))
* improve publish-npm script --latest tag logic ([2a2cd8e](https://github.com/Johnmiicheal/spitch.js/commit/2a2cd8eaff10a2a8cb8d80f048a79398e84cf33e))
* **internal:** codegen related update ([fa34009](https://github.com/Johnmiicheal/spitch.js/commit/fa3400937801458466423727ee4afd44afd059ee))
* **internal:** reduce CI branch coverage ([b24c53e](https://github.com/Johnmiicheal/spitch.js/commit/b24c53e3494f252bd040965c43ccd55a6a97f07f))
* **internal:** upload builds and expand CI branch coverage ([da1f659](https://github.com/Johnmiicheal/spitch.js/commit/da1f6598bd945476254772484129ba1616f854b7))


### Documentation

* **readme:** fix typo ([42ec9b4](https://github.com/Johnmiicheal/spitch.js/commit/42ec9b44499b2446e8e96cdd8a0705545062b180))

## 0.1.0-alpha.6 (2025-04-05)

Full Changelog: [v0.1.0-alpha.5...v0.1.0-alpha.6](https://github.com/Johnmiicheal/spitch.js/compare/v0.1.0-alpha.5...v0.1.0-alpha.6)

### Bug Fixes

* **api:** improve type resolution when importing as a package ([#32](https://github.com/Johnmiicheal/spitch.js/issues/32)) ([feed347](https://github.com/Johnmiicheal/spitch.js/commit/feed347d798e6d7536bf2017f9fa4a2f6a979284))
* avoid type error in certain environments ([#28](https://github.com/Johnmiicheal/spitch.js/issues/28)) ([1ac4c40](https://github.com/Johnmiicheal/spitch.js/commit/1ac4c4033f8077b3a759ced24acf6f1b6c4659dd))
* **client:** send `X-Stainless-Timeout` in seconds ([#30](https://github.com/Johnmiicheal/spitch.js/issues/30)) ([f9a04ff](https://github.com/Johnmiicheal/spitch.js/commit/f9a04ff85053bc7fe59f2931ec161e598b05ad73))
* **internal:** work around https://github.com/vercel/next.js/issues/76881 ([#29](https://github.com/Johnmiicheal/spitch.js/issues/29)) ([f846e8f](https://github.com/Johnmiicheal/spitch.js/commit/f846e8fe7dbcb12178b8abac429117ad0f973acc))
* **mcp:** remove unused tools.ts ([#33](https://github.com/Johnmiicheal/spitch.js/issues/33)) ([9b02034](https://github.com/Johnmiicheal/spitch.js/commit/9b020343ef310e2bbce3b16b678d8241c7e2bab0))


### Chores

* **exports:** cleaner resource index imports ([#25](https://github.com/Johnmiicheal/spitch.js/issues/25)) ([8212b4d](https://github.com/Johnmiicheal/spitch.js/commit/8212b4d3c537f475f896a669cf1e75d1a75b09e2))
* **exports:** stop using path fallbacks ([#27](https://github.com/Johnmiicheal/spitch.js/issues/27)) ([89655e8](https://github.com/Johnmiicheal/spitch.js/commit/89655e8643ad39d3ca250eb0e36cfaa7312623f1))
* **internal:** add aliases for Record and Array ([#31](https://github.com/Johnmiicheal/spitch.js/issues/31)) ([9929f05](https://github.com/Johnmiicheal/spitch.js/commit/9929f051a6e334669d90521847daa25d79b55b53))

## 0.1.0-alpha.5 (2025-03-14)

Full Changelog: [v0.1.0-alpha.4...v0.1.0-alpha.5](https://github.com/Johnmiicheal/spitch.js/compare/v0.1.0-alpha.4...v0.1.0-alpha.5)

### Features

* add SKIP_BREW env var to ./scripts/bootstrap ([#21](https://github.com/Johnmiicheal/spitch.js/issues/21)) ([d293318](https://github.com/Johnmiicheal/spitch.js/commit/d29331811787ae3ff1e05bd9b73f272770596e2f))
* **client:** accept RFC6838 JSON content types ([#22](https://github.com/Johnmiicheal/spitch.js/issues/22)) ([d832ad3](https://github.com/Johnmiicheal/spitch.js/commit/d832ad3fb4465c7a345b0659b7329f8714a0035f))


### Bug Fixes

* **client:** fix export map for index exports ([#16](https://github.com/Johnmiicheal/spitch.js/issues/16)) ([335c421](https://github.com/Johnmiicheal/spitch.js/commit/335c4214eff0826c53680551b6b481cf290fa0eb))


### Chores

* **internal:** codegen related update ([#18](https://github.com/Johnmiicheal/spitch.js/issues/18)) ([b55f60e](https://github.com/Johnmiicheal/spitch.js/commit/b55f60e22e1229d772f3aa732a9ee49ca123f404))
* **internal:** fix devcontainers setup ([#19](https://github.com/Johnmiicheal/spitch.js/issues/19)) ([a9496b5](https://github.com/Johnmiicheal/spitch.js/commit/a9496b55740df172617c7b81dc727e6aa7770678))
* **internal:** remove extra empty newlines ([#23](https://github.com/Johnmiicheal/spitch.js/issues/23)) ([35a3ad7](https://github.com/Johnmiicheal/spitch.js/commit/35a3ad7ec8a0a0694bc580c4dcdcbf6aea985845))


### Documentation

* update URLs from stainlessapi.com to stainless.com ([#20](https://github.com/Johnmiicheal/spitch.js/issues/20)) ([f2aa4fb](https://github.com/Johnmiicheal/spitch.js/commit/f2aa4fb76b86bc7c025e26395b52689e73385e4c))

## 0.1.0-alpha.4 (2025-02-05)

Full Changelog: [v0.1.0-alpha.3...v0.1.0-alpha.4](https://github.com/Johnmiicheal/spitch.js/compare/v0.1.0-alpha.3...v0.1.0-alpha.4)

### Features

* **client:** send `X-Stainless-Timeout` header ([#13](https://github.com/Johnmiicheal/spitch.js/issues/13)) ([77600be](https://github.com/Johnmiicheal/spitch.js/commit/77600be513d6b7ff4d55c0eed9ff347145fd18f7))

## 0.1.0-alpha.3 (2025-01-21)

Full Changelog: [v0.1.0-alpha.2...v0.1.0-alpha.3](https://github.com/Johnmiicheal/spitch.js/compare/v0.1.0-alpha.2...v0.1.0-alpha.3)

### Chores

* **internal:** add test ([#10](https://github.com/Johnmiicheal/spitch.js/issues/10)) ([366537d](https://github.com/Johnmiicheal/spitch.js/commit/366537d1de0e229fa6295d6363e759a908f06563))

## 0.1.0-alpha.2 (2025-01-17)

Full Changelog: [v0.1.0-alpha.1...v0.1.0-alpha.2](https://github.com/Johnmiicheal/spitch.js/compare/v0.1.0-alpha.1...v0.1.0-alpha.2)

### Chores

* **internal:** codegen related update ([#7](https://github.com/Johnmiicheal/spitch.js/issues/7)) ([c6cac1f](https://github.com/Johnmiicheal/spitch.js/commit/c6cac1f3f578a922b6b139232e49ca6f75458f1a))

## 0.1.0-alpha.1 (2025-01-14)

Full Changelog: [v0.0.1-alpha.1...v0.1.0-alpha.1](https://github.com/Johnmiicheal/spitch.js/compare/v0.0.1-alpha.1...v0.1.0-alpha.1)

### Features

* Update README.md ([ca5aeb2](https://github.com/Johnmiicheal/spitch.js/commit/ca5aeb22324da30fff5064395968c07bd39a99f0))
* Update README.md ([b018408](https://github.com/Johnmiicheal/spitch.js/commit/b01840894389983a287a26a8340b221f43003db0))
* Update README.md: npm bundle size ([c910a71](https://github.com/Johnmiicheal/spitch.js/commit/c910a714ff6abdcaa12cfd563d1f0b1f6e4268ee))

## 0.0.1-alpha.1 (2025-01-14)

Full Changelog: [v0.0.1-alpha.0...v0.0.1-alpha.1](https://github.com/Johnmiicheal/spitch.js/compare/v0.0.1-alpha.0...v0.0.1-alpha.1)

### Chores

* go live ([#1](https://github.com/Johnmiicheal/spitch.js/issues/1)) ([0a70f7a](https://github.com/Johnmiicheal/spitch.js/commit/0a70f7a402aa5520b9e8efbe26c4311664b88e75))
* update SDK settings ([#3](https://github.com/Johnmiicheal/spitch.js/issues/3)) ([1abbcaf](https://github.com/Johnmiicheal/spitch.js/commit/1abbcaf1912e82beaca2899cdf93e889addf0e78))
