# Snapshot.org Enhancer Browser Extension

This browser extension highlights Spaces you're eligible to participate in.


Components (html/css/js):


    * background
    
    * content
    
    * popup
    
    * options


development: w/ live server

    yarn run start
    
Production:

    yarn b
    
    OR
    
    yarn build

[DRAFT]

- Components:
  * background script: fetches spaces from snapshot.org and filters out the ineligible spaces and blacklisted ones
  * content script: inject the curated list of eligible spaces into the snapshot.org main page
  * popup script: Insert/change user's ethereum address
  * options script: Modify the spaces blacklist
