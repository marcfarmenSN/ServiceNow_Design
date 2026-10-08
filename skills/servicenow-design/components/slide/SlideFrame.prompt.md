1920×1080 branded slide shell — gradient background plus the template's footer wordmark, source line and page number; put slide content inside with absolute positioning on the 86px margin grid.

```jsx
<SlideFrame hue="green" pageNumber={5} source="Source: ServiceNow internal data">
  <h1 style={{ position:'absolute', left:86, top:84, fontSize:80 }}>Title</h1>
</SlideFrame>
```

- Grid: margins 86px, title top 84, subtitle top 173, content top 283, gutter 28.
- `background` accepts the template PNGs in `assets/backgrounds/` for exact PPT parity.
