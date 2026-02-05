# Assets Directory

This directory stores images, diagrams, screenshots, and other media files referenced in dev logs.

## Organization

You can organize assets in subdirectories by date, topic, or type:

```
assets/
  ├── images/
  ├── diagrams/
  ├── screenshots/
  └── videos/
```

Or keep them flat with descriptive names:

```
assets/
  ├── 2026-01-28-setup-screenshot.png
  ├── 2026-02-05-code-diagram.png
  └── project-workflow.png
```

## Supported Formats

- **Images**: PNG, JPG, GIF, SVG
- **Videos**: MP4, WebM
- **Other**: PDF, ZIP (for downloadable resources)

## Referencing Assets

From a dev log entry, reference assets using relative paths:

```markdown
![Description](../assets/filename.png)
```

## Tips

- Use descriptive filenames
- Keep file sizes reasonable (compress large images)
- Add alt text to images for accessibility
- Consider using diagrams to explain complex concepts
