# Sass pattern

### Rules:

#### Use the `.scss` extension for style files.

Ex:

- `_variables.scss`
- `ComponentName.module.scss`

#### Use the [BEM](https://getbem.com/) pattern to name classes to their full potential..

_Bad code_

```
.btn  { ... }

.btn__green { ... }
```

_Good code_

```
.btn {
 ...

  &__green {
    ...
  }
}
```

### Project Structure

#### Utilities

> Holds Sass tools, helper files, variables, functions, mixins and other config files.
>
> `These files are meant to be just helpers which don’t output any CSS when compiled.`

#### Base

> Holds the boilerplate code for the project.
>
> Including standard styles such as resets and typographic rules, which are commonly used throughout your project.

#### Components

> Holds all of your styles for buttons, carousels, sliders, and similar page components (think widgets).
>
> Your project will typically contain a lot of component files — as the whole site/app should be mostly composed of small modules.

#### Layout

> Contains all styles involved with the layout of your project.
>
> Such as styles for your header, footer, navigation and the grid system.

#### Pages

> Any styles specific to individual pages will sit here.
>
> For example it’s not uncommon for the home page of your site to require page specific styles that no other page receives.

#### Themes

> This is likely not used in many projects.
>
> It would hold files that create project specific themes.
>
> For example if sections of your site contain alternate color schemes.
