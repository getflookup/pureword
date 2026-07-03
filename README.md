# PureWord - Word Filter Lists

This repository contains the word filter lists for the PureWord Chrome Extension.

## Contents

- **`filters/pureword-word-pairs.json`** - Main word pair filter list for replacing vulgar words with clean alternatives

## How it Works

The PureWord extension fetches the latest word pairs from this repository to dynamically update its filters. Users always have the most current word replacements without needing to update the extension.

## Format

The word pairs are stored as JSON with vulgar words as keys and replacements as values:

```json
{
  "badword": "clean replacement",
  "damn": "darn",
  "hell": "heck"
}
```

## Contributing

To add or update word replacements, edit `filters/pureword-word-pairs.json` and submit a pull request.

## License

ISC
