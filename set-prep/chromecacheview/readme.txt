


ChromeCacheView v1.21
Copyright (c) 2008 - 2009 Nir Sofer
Web site: http://www.nirsoft.net



Description
===========

ChromeCacheView is a small utility that reads the cache folder of Google
Chrome Web browser, and displays the list of all files currently stored
in the cache. For each cache file, the following information is
displayed: URL, Content type, File size, Last accessed time, Expiration
time, Server name, Server response, and more.
You can easily select one or more items from the cache list, and then
extract the files to another folder, or copy the URLs list to the
clipboard.



The Location Of Chrome Cache Folder
===================================

The cache folder of Google Chrome is located under [User Profile]\Local
Settings\Application Data\Google\Chrome\User Data\Default\Cache



Using ChromeCacheView
=====================

ChromeCacheView doesn't require any installation process or additional
DLL files. Simply copy the executable file (ChromeCacheView.exe) to any
folder you like, and run it.
After you run it, the main window displays the list of files currently
stored in the cache of the default Google Chrome user.
You can select one or more cache files from the list, and than export the
list into text/html/xml file ('Save Selected Items' option), copy the URL
list to the clipboard (Ctrl+U), copy the entire table of cache files
(Ctrl+C), and then paste it to Excel or to OpenOffice spreadsheet. You
can also extract the actual files from the cache, and save them into
another folder, You can do that by using the 'Copy Selected Cache Files
To' option (F4).



Versions History
================


* Version 1.21:
  o Fixed bug: ChromeCacheView failed to copy cache files because the
    filenames contained invalid file characters (?, :, *, |, and others).

* Version 1.20:
  o Added new option in 'Copy Selected Cache Files': Update the
    modified time of the copied files according to modified time in the
    Web server.

* Version 1.15:
  o Added support for working with the cache files of Chrome 2.x

* Version 1.10:
  o Added 'Show Zero-Length Files' option.
  o Added fileter by file type. (text/html, image, audio, video,
    application)

* Version 1.05
  o New option in 'Copy Selected Files To...': Save the files in the
    directory structure of the Web site.

* Version 1.00 - First release.



Command-Line Options
====================



/stext <Filename>
Save the list of all cache files into a regular text file.

/stab <Filename>
Save the list of all cache files into a tab-delimited text file.

/scomma <Filename>
Save the list of all cache files into a comma-delimited text file.

/stabular <Filename>
Save the list of all cache files into a tabular text file.

/shtml <Filename>
Save the list of all cache files into HTML file (Horizontal).

/sverhtml <Filename>
Save the list of all cache files into HTML file (Vertical).

/sxml <Filename>
Save the list of all cache files to XML file.

-folder <Cache Folder>
Start ChromeCacheView with the specified cache folder.

Examples:
ChromeCacheView.exe -folder "F:\Documents and
Settings\Administrator\Local Settings\Application Data\Google\Chrome\User
Data\Default\Cache"
ChromeCacheView.exe -folder "F:\Documents and Settings\User1\Local
Settings\Application Data\Google\Chrome\User Data\Default\Cache" /shtml
c:\temp\chrm.html
ChromeCacheView.exe /stext c:\temp\chrm.txt



Translating ChromeCacheView to other languages
==============================================

In order to translate ChromeCacheView to other language, follow the
instructions below:
1. Run ChromeCacheView with /savelangfile parameter:
   ChromeCacheView.exe /savelangfile
   A file named ChromeCacheView_lng.ini will be created in the folder of
   ChromeCacheView utility.
2. Open the created language file in Notepad or in any other text
   editor.
3. Translate all string entries to the desired language. Optionally,
   you can also add your name and/or a link to your Web site.
   (TranslatorName and TranslatorURL values) If you add this information,
   it'll be used in the 'About' window.
4. After you finish the translation, Run ChromeCacheView, and all
   translated strings will be loaded from the language file.
   If you want to run ChromeCacheView without the translation, simply
   rename the language file, or move it to another folder.



License
=======

This utility is released as freeware. You are allowed to freely
distribute this utility via floppy disk, CD-ROM, Internet, or in any
other way, as long as you don't charge anything for this. If you
distribute this utility, you must include all files in the distribution
package, without any modification !



Disclaimer
==========

The software is provided "AS IS" without any warranty, either expressed
or implied, including, but not limited to, the implied warranties of
merchantability and fitness for a particular purpose. The author will not
be liable for any special, incidental, consequential or indirect damages
due to loss of data or any other reason.



Feedback
========

If you have any problem, suggestion, comment, or you found a bug in my
utility, you can send a message to nirsofer@yahoo.com
