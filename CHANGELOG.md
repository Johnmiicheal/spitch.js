# Changelog

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
