# Room Image Organization Manifest

**Date Created:** May 22, 2026  
**Project:** Grand Anse Beach Palace - Hotel Website  
**Purpose:** Structure for room image galleries and carousels

---

## Summary

- **Total Room Types:** 8
- **Assigned Images:** 8 (one primary per room, from original 13.jpg–20.jpg)
- **Unassigned Images:** 10 (original images 3.jpg–12.jpg in `unassigned/` folder)
- **Original Images:** All preserved in root `rooms/` folder

---

## Room Folders & Images

### 1. **deluxe-ocean-view-apartment-1bed/**
- **Room Name:** Deluxe Ocean View Apartment (1 Bed)
- **Room ID:** 1
- **Capacity:** 2 guests
- **Primary Image:** `01.jpg` (copied from original 13.jpg)
- **Status:** Ready for gallery expansion (3–7 additional images supported)
- **Recommendation:** This is a signature room—consider adding 4–6 additional photos showing different angles, amenities, and nighttime/sunset views.

---

### 2. **garden-view-apartment-1bed/**
- **Room Name:** Garden View Apartment (1 Bed)
- **Room ID:** 2
- **Capacity:** 2 guests
- **Primary Image:** `01.jpg` (copied from original 14.jpg)
- **Status:** Ready for gallery expansion
- **Recommendation:** Add photos of the garden views, balcony, living area, and bedroom close-ups.

---

### 3. **standard-ocean-view-room/**
- **Room Name:** Standard Ocean View Room
- **Room ID:** 3
- **Capacity:** 2 guests
- **Primary Image:** `01.jpg` (copied from original 15.jpg)
- **Status:** Ready for gallery expansion
- **Recommendation:** Add balcony sunset views, bedroom detail, bathroom, and ocean horizon shots.

---

### 4. **standard-garden-view-room/**
- **Room Name:** Standard Garden View Room
- **Room ID:** 4
- **Capacity:** 2 guests
- **Primary Image:** `01.jpg` (copied from original 16.jpg)
- **Status:** Ready for gallery expansion
- **Recommendation:** Add multiple garden perspectives, interior layout, and landscaping details.

---

### 5. **ocean-view-apartment-2bed/**
- **Room Name:** Ocean View Apartment (2 Bed)
- **Room ID:** 5
- **Capacity:** 4 guests
- **Primary Image:** `01.jpg` (copied from original 17.jpg)
- **Status:** Ready for gallery expansion
- **Recommendation:** Showcase layout, both bedrooms, kitchenette, balcony, and living space.

---

### 6. **ocean-view-apartment-3bed/**
- **Room Name:** Ocean View Apartment (3 Bed)
- **Room ID:** 6
- **Capacity:** 2–6 guests
- **Primary Image:** `01.jpg` (copied from original 18.jpg)
- **Status:** Ready for gallery expansion
- **Recommendation:** Show multiple bedrooms, kitchen, living areas, and ocean views. This larger unit benefits from 6–8 photos.

---

### 7. **ocean-view-apartment-4bed/**
- **Room Name:** Ocean View Apartment (4 Bed)
- **Room ID:** 7
- **Capacity:** 2–8 guests
- **Primary Image:** `01.jpg` (copied from original 19.jpg)
- **Status:** Ready for gallery expansion
- **Recommendation:** Extensive photography recommended: all bedrooms, full kitchen, multiple living/dining areas, premium amenities, multiple balcony angles.

---

### 8. **ocean-view-penthouse-5bed/**
- **Room Name:** Ocean View Penthouse (5 Bed)
- **Room ID:** 8
- **Capacity:** 2–10 guests
- **Primary Image:** `01.jpg` (copied from original 20.jpg)
- **Status:** Ready for gallery expansion
- **Recommendation:** Premium unit deserves premium photography (7–8 images). Showcase panoramic ocean views, multiple living areas, premium finishes, all bedrooms, and outdoor spaces.

---

## Unassigned Images

### **unassigned/**
**Original Images:** 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg, 10.jpg, 11.jpg, 12.jpg  
**Renamed To:** 03.jpg through 12.jpg (sequential naming preserved)

**Status:** Not matched to any room in the current Rooms.tsx data.

**Next Steps:**
1. Review each image visually to determine which room(s) they belong to
2. Move appropriate images into their room folders (maintaining sequential numbering, e.g., 02.jpg, 03.jpg, etc.)
3. Consider whether images show different angles of the same room or new rooms not yet defined in the code
4. Create additional room folders if these images represent new room types
5. Or delete/archive if not needed

---

## Original Images (Preserved in Root)

All original files (3.jpg–20.jpg) remain in `public/media/rooms/` root folder:
- ✅ 3.jpg–12.jpg (unassigned originals)
- ✅ 13.jpg–20.jpg (room-assigned originals)
- ✅ Plus: 10.JPG, 4.JPG, 5.JPG, 6.JPG (mixed case variants)

**Note:** Original files are preserved as backup. They can be deleted after verifying all room folders have the images they need.

---

## Next Steps for Gallery Implementation

1. **Add Secondary Images:** Place additional images (02.jpg, 03.jpg, etc.) into each room folder
2. **Update React Component:** Modify the Rooms component to read from room-specific folders for carousel/gallery rendering
3. **Update Image Paths:** Change image references from `media/rooms/13.jpg` to `media/rooms/{room-slug}/01.jpg`
4. **Test Galleries:** Ensure carousels display all images correctly
5. **Clean Up:** After testing, delete original images from root folder

---

## File Naming Convention

- Numeric: `01.jpg`, `02.jpg`, etc. (preferred for simplicity)
- Descriptive (optional): `01-bedroom.jpg`, `02-bathroom.jpg`, etc.
- Case: Lowercase `.jpg` recommended for consistency

---

## Recommendations

✅ **Immediate:**
- Review unassigned images and categorize them
- Decide if any represent new room types not yet in the code

✅ **Before Going Live:**
- Photograph additional angles for each room (target: 5–8 images per room)
- Place new images in folders using sequential naming
- Test carousel/gallery implementation

✅ **Long-Term:**
- Maintain a backup of original images
- Update this manifest as new rooms are added

---

**Document Version:** 1.0  
**Status:** ✅ Folder structure created, primary images organized, unassigned images identified
