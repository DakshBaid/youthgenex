import sys
from PIL import Image, ImageFilter

def enhance_logo(input_path, output_path, scale_factor=2):
    try:
        with Image.open(input_path) as img:
            # Convert to RGBA if it's not
            if img.mode != 'RGBA' and img.format == 'PNG':
                img = img.convert('RGBA')
            elif img.mode != 'RGB' and img.format in ['JPEG', 'JPG']:
                img = img.convert('RGB')
                
            # Upscale using Lanczos (high quality)
            new_size = (int(img.width * scale_factor), int(img.height * scale_factor))
            img_resized = img.resize(new_size, Image.Resampling.LANCZOS)
            
            # Apply a slight unsharp mask to make it crisper
            img_sharpened = img_resized.filter(ImageFilter.UnsharpMask(radius=2, percent=150, threshold=3))
            
            # Save the result
            img_sharpened.save(output_path, quality=95)
            print(f"Successfully enhanced {input_path} -> {output_path}")
    except Exception as e:
        print(f"Error processing {input_path}: {e}")

if __name__ == "__main__":
    base_dir = r"C:\Users\daksh\.gemini\antigravity\scratch\youthgenx-web\public"
    logos = ["logo.jpeg", "ids-logo.png", "gxm-logo.png", "spc-logo.png"]
    
    for logo in logos:
        path = f"{base_dir}\\{logo}"
        # Overwrite the original with the enhanced version
        enhance_logo(path, path, scale_factor=2)
