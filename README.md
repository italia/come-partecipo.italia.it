<!-- markdownlint-disable no-inline-html -->

# wizard-italia

Guided wizard to direct contributors

## Project setup

```shell
yarn install
```

### Compiles and hot-reloads for development

```shell
yarn serve
```

### Compiles and minifies for production

```shell
yarn build
```

### Lints and fixes files

```shell
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Use it as a Web Component
```html

<link rel="stylesheet" href="module_path/wizard-italia.css">

<wizard-italia matomo-site-id="wBEpDzz0yL"></wizard-italia>

<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
<script src="module_path/wizard-italia.umd.js"></script>
<script>
  customElements.whenDefined("wizard-italia").then(() => {
    document.querySelector('wizard-italia').styleConfig = {
      iconPack: 'bs',
      iconComponent: 'bs-icon',
      button: {
        rootClass: 'btn',
        outlinedClass: 'btn-outline-',
        disabledClass: 'btn-disabled',
        variantClass: (variant, context) => (!context.props.outlined ? `btn-${variant}` : ''),
      }
    }
  })
</script>
```

### Build web component

```
yarn wc
```

## Contributing

Every contribution is welcome!

Here is a list of users who contributed to this repository:

<a href="https://github.com/italia/wizard-italia/graphs/contributors">
  <img src="https://contributors-img.web.app/image?repo=italia/wizard-italia" />
</a>

## License

Copyright © 2021 Presidenza del Consiglio dei Ministri

The source code is released under the GNU Affero General Public License
v3.0.
