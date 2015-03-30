"use strict"

MediumEditor.prototype = {
  defaults: {}
  , init: function (elements, options) {}
  , setup: function () {}
  , on: function (target, event, listener, useCapture) {}
  , off: function (target, event, listener, useCapture) {}
  , indexOfListener: function (target, event, listener, useCapture) {}
  , delay: function (fn) {}
  , removeAllEvents: function () {}
  , initElements: function () {}
  , setElementSelection: function (selector) {}
  , bindBlur: function () {}
  , bindClick: function (i) {}
  , bindElementActions: function () {}
  , activatePlaceholder:  function (el) {}
  , placeholderWrapper: function (evt, el) {}
  , serialize: function () {}
  , initExtension: function (extension, name) {}
  , initCommands: function () {}
  , getExtensionByName: function (name) {}
  , callExtensions: function (funcName) {}
  , bindParagraphCreation: function (index) {}
  , bindReturn: function (index) {}
  , bindKeydown: function (index) {}
  , onBlockModifier: function (e) {}
  , initToolbar: function () {}
  , bindDragDrop: function () {}
  , stopSelectionUpdates: function () {}
  , startSelectionUpdates: function () {}
  , checkSelection: function () {}
  , queryCommandState: function (action) {}
  , execAction: function (action, opts) {}
  , execActionInternal: function (action, opts) {}
  , getSelectedParentElement: function (range) {}
  , execFormatBlock: function (el) {}
  , hideToolbarDefaultActions: function () {}
  , setToolbarPosition: function () {}
  , selectAllContents: function () {}
  , saveSelection: function () {}
  , restoreSelection: function () {}
  , hideAnchorPreview: function () {}
  , showAnchorPreview: function (anchorEl) {}
  , observeAnchorPreview: function (anchorEl) {}
  , createAnchorPreview: function () {}
  , anchorPreviewTemplate: function () {}
  , anchorPreviewClickHandler: function (event) {}
  , editorAnchorObserver: function (e) {}
  , bindAnchorPreview: function (index) {}
  , createLink: function (opts) {}
  , setButtonClass: function (buttonClass) {}
  , activate: function () {}
  , deactivate: function () {}
  , bindPaste: function () {}
  , setPlaceholders: function () {}
  , cleanPaste: function (text) {}
  , pasteHTML: function (html) {}
}
