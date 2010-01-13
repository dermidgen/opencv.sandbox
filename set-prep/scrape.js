/**
 * 
 * New BSD License
 * --------------------------------------------------------------------------------
 * Copyright (c) 2010, Danny Graham
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 * 
 *     * Redistributions of source code must retain the above copyright notice,
 *       this list of conditions and the following disclaimer.
 * 
 *     * Redistributions in binary form must reproduce the above copyright notice,
 *       this list of conditions and the following disclaimer in the documentation
 *       and/or other materials provided with the distribution.
 * 
 *     * Neither the name of Danny Graham nor the names of their
 *       contributors may be used to endorse or promote products derived from this
 *       software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
 * ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */


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
