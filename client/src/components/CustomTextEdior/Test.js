import React, { MouseEvent, ReactElement, useCallback, useMemo, useRef, useState } from 'react';
import { EditorState } from 'draft-js';
import Editor from '@draft-js-plugins/editor';
import createMentionPlugin, {
  defaultSuggestionsFilter,
  MentionData,
  MentionPluginTheme,
} from '@draft-js-plugins/mention';
import editorStyles from './CustomMentionEditor.module.css';
import mentionsStyles from './MentionsStyles.module.css';
import mentions from './Mentions.js';

import '../../../node_modules/@draft-js-plugins/inline-toolbar/lib/plugin.css';
import '../../../node_modules/@draft-js-plugins/side-toolbar/lib/plugin.css';
import 'draft-js/dist/Draft.css';
import '@draft-js-plugins/inline-toolbar/lib/plugin.css';

import buttonStyles from './theme/side/buttonStyles.module.css';
import toolbarStyles from './theme/side/toolbarStyles.module.css';
import blockTypeSelectStyles from './theme/side/blockTypeSelectStyles.module.css';

import buttonStyleInline from './theme/inlineToolbar/buttonStyles.module.css';
import toolbarStyleInline from './theme/inlineToolbar/toolbarStyles.module.css';

import createSideToolbarPlugin from '@draft-js-plugins/side-toolbar';
import createInlineToolbarPlugin, { Separator } from '@draft-js-plugins/inline-toolbar';

import { ItalicButton, BoldButton, UnderlineButton } from '@draft-js-plugins/buttons';

function Entry(props) {
  const { mention, theme, searchValue, isFocused, ...parentProps } = props;

  return (
    <div {...parentProps}>
      <div className={theme?.mentionSuggestionsEntryContainer}>
        <div className={theme?.mentionSuggestionsEntryContainerLeft}>
          <img src={mention.avatar} className={theme?.mentionSuggestionsEntryAvatar} role="presentation" />
        </div>

        <div className={theme?.mentionSuggestionsEntryContainerRight}>
          <div className={theme?.mentionSuggestionsEntryText}>{mention.name}</div>

          <div className={theme?.mentionSuggestionsEntryTitle}>{mention.title}</div>
        </div>
      </div>
    </div>
  );
}

const mentionPlugin = createMentionPlugin({
  entityMutability: 'IMMUTABLE',
  theme: mentionsStyles,
  mentionPrefix: '@',
  supportWhitespace: true,
});
// eslint-disable-next-line no-shadow
const { MentionSuggestions } = mentionPlugin;
// eslint-disable-next-line no-shadow

const inlineToolbarPlugin = createInlineToolbarPlugin({
  // theme: { buttonStyles: buttonStyleInline, toolbarStyles: toolbarStyleInline },
});
const { InlineToolbar } = inlineToolbarPlugin;

const sideToolbarPlugin = createSideToolbarPlugin({
  // position: 'right',
  // theme: { buttonStyles, toolbarStyles, blockTypeSelectStyles },
});
const { SideToolbar } = sideToolbarPlugin;

const plugins = [sideToolbarPlugin, inlineToolbarPlugin, mentionPlugin];

export default function CustomMentionEditor() {
  const ref = useRef(null);
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
  const [open, setOpen] = useState(false);
  const [suggestions, setSuggestions] = useState(mentions);

  const onChange = useCallback((_editorState) => {
    setEditorState(_editorState);
  }, []);
  const onOpenChange = useCallback((_open) => {
    setOpen(_open);
  }, []);
  const onSearchChange = useCallback(({ value }) => {
    setSuggestions(defaultSuggestionsFilter(value, mentions));
  }, []);

  return (
    <div
      className={editorStyles.editor}
      onClick={() => {
        ref.current.focus();
      }}
    >
      <Editor editorKey={'editor'} editorState={editorState} onChange={onChange} plugins={plugins} ref={ref}></Editor>
      <MentionSuggestions
        open={open}
        onOpenChange={onOpenChange}
        suggestions={suggestions}
        onSearchChange={onSearchChange}
        onAddMention={() => {
          // get the mention object selected
        }}
        entryComponent={Entry}
        popoverContainer={({ children }) => <div>{children}</div>}
      />
    </div>
  );
}
