import os

base_path = "src"

folders = [
    "components",
    "assets/images",
    "assets/gifs",
    "assets/music"
]

files = [
    "components/Welcome.jsx",
    "components/Memories.jsx",
    "components/Gallery.jsx",
    "components/Surprise.jsx",
    "components/Ending.jsx"
]

# Create folders
for folder in folders:
    os.makedirs(os.path.join(base_path, folder), exist_ok=True)

# Create files
for file in files:
    file_path = os.path.join(base_path, file)
    with open(file_path, "w") as f:
        f.write("")

print("✅ Folder structure created successfully!")
