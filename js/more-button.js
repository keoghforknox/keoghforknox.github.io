var collapseDiv = document.createElement('div')
collapseDiv.setAttribute('class','collapse');
collapseDiv.setAttribute('id','extendedBio');

var moreButton = document.createElement('button');
moreButton.setAttribute('class','c-link--readmore btn btn-primary btn-xs');
moreButton.setAttribute('type','button');
moreButton.setAttribute('data-toggle','collapse');
moreButton.setAttribute('data-target','#extendedBio');
moreButton.setAttribute('aria-expanded','false');
moreButton.setAttribute('aria-controls','extendedBio');
moreButton.innerHTML = 'More...';

var theMain = document.getElementsByTagName('main')[0];
var theParagraphs = theMain.children;
var theParagraphCount = theParagraphs.length


for(var i = 1; i < theParagraphCount; i++)
{
  collapseDiv.appendChild(theParagraphs[1]);
}

theMain.appendChild(moreButton);
theMain.appendChild(collapseDiv);