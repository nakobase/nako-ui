#!/bin/bash

if [ "$#" -ne 1 ]; then
  echo "Usage: $0 <ComponentName>"
  exit 1
fi

# e.g. button
COMPONENT_NAME=$1

# e.g. Button
COMPONENT_NAME_CAPITALIZED=$(echo "$COMPONENT_NAME" | sed -e "s/^\(.\)/\U\1/")

TARGET_DIR="src/lib/components/ui/${COMPONENT_NAME_CAPITALIZED}"
SOURCE_FILE_LOWER="src/lib/components/ui/${COMPONENT_NAME}.tsx"
SOURCE_FILE_UPPER="${TARGET_DIR}/${COMPONENT_NAME}.tsx"
DEST_FILE="${TARGET_DIR}/index.tsx"

# ディレクトリを作成
mkdir -p $TARGET_DIR

# ファイルを移動
mv $SOURCE_FILE_LOWER $TARGET_DIR
mv $SOURCE_FILE_UPPER $DEST_FILE
