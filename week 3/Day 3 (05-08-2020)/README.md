# NETLIFY LINK
## https://quirky-hopper-4d6349.netlify.app/

float: right;
float:left;
flexbox
display:inline-block;
universal selector (*)

-recap of box model.
-position property.
-drop shadow.
-clip property.
-measurement scales.
-fonts.
-float property.
-icons
-meta - viewport - how browser takes scales.

float have only 3 values -> right,left and none
float is by default set to left

direction property is used to set the direction of  
writing of the text
rtl=right to left
ltr=left to right

for content we use float and for text we use direction.

section vs div
-both are block element
-in section we can bind several elements and has a specific meaning
-in div, does not have any specific content, it can contain anything

position is used to position in webpage.
it takes value top,bottom,left,right

position:fixed
-fixed to the browser window

position:relative
-it will relatively position the element
-it is relative to previous element.

position:static
-fixed to the browser case
-renders as it is. 

position:sticky
-works based on browser scroll.
-it is same as fixed but unlike fixed it has some interactions.

position:absolute
-it can be position anywhere in the region. i.e. nearest to
the previous element.

shadow- it will give a shadow effect to the box.
its takes values in "top right bottom left" and color

clip- only works with absolute position property.
it helps to crop the content as per the values (trbl).
clip is basically used in image cropping

(absolute values)
measurement= cm,mm,1 inch=96px
1px = 1/96 of 1 inch
pt = 1pt = 1/72 of 1 inch

(relative values)
em twice 
rem relative to root font size
% relative to parent
vw (viewport width) used in media queries
-1% of viewport width
vh (viewport height) used in media queries
-1% of viewport height
vmin used in media queries
vmax used in media queries
