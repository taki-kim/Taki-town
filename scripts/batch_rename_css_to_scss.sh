#!/bin/bash
# 1. Rename all *.module.css to *.module.scss
find . -name "*.module.css" | while read file; do
  newfile="${file%.module.css}.module.scss"
  mv "$file" "$newfile"
done
# 2. Replace all imports of *.module.css with *.module.scss in .tsx, .ts, .js, .jsx, .scss, .css
find . \( -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" -o -name "*.scss" -o -name "*.css" \) | while read file; do
  sed -i '' 's/\.module\.css"/\.module\.scss"/g' "$file"
  sed -i '' "s/\.module\.css'/\.module\.scss'/g" "$file"
done
