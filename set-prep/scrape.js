var scrape = function()
{
	this.tiles = [];
	this.tileStash = [];
	
	var latlng = new google.maps.LatLng(33.6465, -117.688);
	var myOptions = {
	  zoom: 18,
	  center: latlng,
	  mapTypeId: google.maps.MapTypeId.SATELLITE
	};
	
	var self = this;
	var onTilesLoaded = function()
	{
		var images = document.getElementsByTagName('img');
		for(var i=0; i<images.length; i++)
		{
			self.tiles.push(images[i].src);
		}
		self.tiles = self.unique(self.tiles);
	};
	
    //this.map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    
    //google.maps.event.addListener(this.map,'tilesloaded', onTilesLoaded);
};

/** PUBLIC METHODS **/
scrape.prototype.getMap = function()
{
	return this.map;
};

scrape.prototype.stashTiles = function()
{
	this.tileStash.push(this.tiles);
};

scrape.prototype.clearTiles = function()
{
	this.tiles = [];
};

scrape.prototype.getTiles = function()
{
	return this.tiles;
};

/**
 * Quickie copy/paste grab from http://www.roseindia.net/java/javascript-array/javascript-array-unique.shtml
 * 
 * @param arrayName
 * @return array
 */
scrape.prototype.unique = function(arrayName)
{
    var newArray=new Array();
    label:for(var i=0; i<arrayName.length;i++ )
    {  
        for(var j=0; j<newArray.length;j++ )
        {
            if(newArray[j]==arrayName[i]) 
                continue label;
        }
        newArray[newArray.length] = arrayName[i];
    }
    return newArray;
};

scrape.prototype.log = function(sMessage)
{
	var log = document.getElementById('dumpLog');
	log.innerHTML += sMessage + '<br/>';
};

scrape.prototype.logReset = function()
{
	var log = document.getElementById('dumpLog');
	log.innerHTML = '';
};

scrape.prototype.dumpTiles = function()
{
	var tiles = this.unique(this.getTiles());
	
	this.logReset();
	var out = '';
	
	for(var i=0; i<tiles.length; i++)
	{
		out += tiles[i] + '<br/>';
	}
	
	this.log(out);
	tiles = null;
};

/** STATIC PROPERTIES **/
scrape.instance = null;

/** STATIC METHODS **/
scrape.Main = function()
{
	var scraper = scrape.getInstance();
};

scrape.getInstance = function()
{
	if (scrape.instance == null) scrape.instance = new scrape();
	return scrape.instance;
};
