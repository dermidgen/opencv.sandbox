## Samples for OpenCV.
You must have OpenCV installed. Duh.

This sandbox seeks to provide a test bed for performing OpenCV operations
on individual tiles from Google Maps.  As a final product, we'll use this
information as an additional overlay with our Maps API implementation.

### Tuning OpenCV
We'll be collecting a small sample set of tiles from Google Maps
(pending their permission to do so) and working with this data set to
improve our ability to detect buildings, vehicles, foliage, roads, etc.
Once we have trained our engine this sample set will be discarded.

### Scraping
The scraping tools here are *NOT* to be used in any way to glean or store
data from Google Maps.  This is a clear violation of Maps' terms of use.
Use of the scraping tools is permitted only for the purposes of this project
and only pending Google's explicit permission.

Please see http://www.google.com/permissions/geoguidelines.html for details

#### Mechanics
The scraping tool here is designed to be non-invasive to Google and leverage
your browser cache to avoid any additional request to Google's servers.  The
idea is to let JavaScript control the map and incrementally bring a region
into view.  The JavaScript tracks X/Y & LatLng values as well as the URI to
tile images.

Once the scan has been completed, tiles are extracted from Chromium cache,
matched with the values from our JavaScript scan, and temporarily stored.

Sample set tiles are *not* to be add to the git repository, and are to be
discarded once training of the opencv implementation is complete.  The path
./set-prep/scrape.out contains a .gitignore to help prevent this from
happening.