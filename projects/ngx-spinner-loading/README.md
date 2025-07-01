# ⏳ ngx-spinner-loading

A lightweight, customizable Angular loading spinner package that supports global, section-based, inline loaders, and automatic HTTP integration via interceptors. Built with Angular standalone components and signal-based state.

## 🚀 Features

- ✅ Fullscreen, section-based, and inline loading modes
- ✅ Auto show/hide during HTTP requests via Angular interceptor
- ✅ Manual loader control using `NgxSpinnerLoadingService`
- ✅ Customizable: size, color, animation type, speed, timeout
- ✅ Use your own templates (`type="custom"`)
- ✅ Lightweight, fast, no external dependencies
- ✅ Compatible with Angular 15+ standalone APIs

## 📦 Installation

```bash
npm install ngx-spinner-loading
```

## 🧩 Usage

### 1. Import Loader in Your App

```ts
import { NgxSpinnerLoadingInterceptor } from 'ngx-spinner-loading';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptors([NgxSpinnerLoadingInterceptor]))
  ]
});
```

### 2. Add Global Loader in Template

```html
<ngx-spinner-loader
  type="spinner"
  size="md"
  color="#3498db"
  mode="fullscreen"
  [timeout]="5000"
></ngx-spinner-loader>
```

```ts
import { Component } from '@angular/core';
import { NgxSpinnerLoaderComponent } from 'ngx-spinner-loading';

@Component({
  selector: 'app-root',
  imports: [NgxSpinnerLoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent { }
```

## ⚙️ Inputs – Customization

| Input      | Type                                                   | Default        | Description                                          |
|------------|--------------------------------------------------------|----------------|------------------------------------------------------|
| `type`     | `'spinner' \| 'bar' \| 'dots' \| 'circle' \| 'custom'` | `'spinner'`    | Loader animation type                                |
| `size`     | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'`                  | `'md'`         | Preset sizes for loader                              |
| `color`    | `string`                                               | `#3498db`      | Loader color (hex or CSS value)                     |
| `mode`     | `'fullscreen' \| 'section' \| 'inline'`                | `'fullscreen'` | Loader positioning                                   |
| `timeout`  | `number`                                               | `undefined`    | Auto-hide loader after milliseconds                  |
| `speed`    | `number`                                               | `1`            | Animation speed multiplier                           |
| `manual`   | `boolean`                                              | `false`        | If true, always visible unless hidden manually       |
| `zIndex`   | `number`                                               | `9999`         | z-index control for layering                         |
| `template` | `<ng-template>`                                        | `undefined`    | Provide custom loader when `type="custom"`           |

## 🧪 Example (Manual Control)

```html
<ngx-spinner-loader [manual]="true" type="bar" color="green"></ngx-spinner-loader>
```

```ts
constructor(private loading: NgxSpinnerLoadingService) {}

startLoad() {
  this.loading.show();
  setTimeout(() => this.loading.hide(), 3000);
}
```

## 🔁 Auto HTTP Loading

Use the provided HTTP interceptor to automatically show/hide loader for all requests:

```ts
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { NgxSpinnerLoadingInterceptor } from 'ngx-spinner-loading';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptors([NgxSpinnerLoadingInterceptor]))
  ]
});
```

## 🧩 Section Loader Directive (Optional)

```html
<div *ngxSpinnerLoading="isLoading">Dashboard Content...</div>
```

```ts
 private isLoading:boolean=false;

constructor(private loading: NgxSpinnerLoadingService) {}

loadData() {
  this.isLoading = true;
  this.http.get(...).subscribe(() => this.isLoading = false);
}
```
## 💡 Custom Template Example

```html
<ngx-spinner-loader type="custom">
  <ng-template>
    <div class="my-loader">⏳ Please wait...</div>
  </ng-template>
</ngx-spinner-loader>
```

## 📄 License

[MIT © 2025 Thalsi](https://github.com/thalsi/ngx-spinner-loading/blob/master/LICENSE)