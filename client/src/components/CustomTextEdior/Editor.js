import '../../../node_modules/@draft-js-plugins/inline-toolbar/lib/plugin.css';
import '../../../node_modules/@draft-js-plugins/emoji/lib/plugin.css';
import '../../../node_modules/@draft-js-plugins/hashtag/lib/plugin.css';
import '../../../node_modules/@draft-js-plugins/alignment/lib/plugin.css';

import './style/emoje-plugin.css';

import buttonStyleInline from './theme/inlineToolbar/buttonStyles.module.css';
import toolbarStyleInline from './theme/inlineToolbar/toolbarStyles.module.css';

import editorStyles from './editorStyles.module.css';

import hashtagPluginTheme from './theme/hashtagStyles.module.css';

import React, { Component } from 'react';
import Editor, { createEditorStateWithText, composeDecorators } from '@draft-js-plugins/editor';

import createInlineToolbarPlugin, { Separator } from '@draft-js-plugins/inline-toolbar';
import createEmojiPlugin from '@draft-js-plugins/emoji';
import createHashtagPlugin from '@draft-js-plugins/hashtag';
import createImagePlugin from '@draft-js-plugins/image';
import createAlignmentPlugin from '@draft-js-plugins/alignment';
import createFocusPlugin from '@draft-js-plugins/focus';
import createResizeablePlugin from '@draft-js-plugins/resizeable';
import createBlockDndPlugin from '@draft-js-plugins/drag-n-drop';

import { fromJS } from 'immutable';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { convertToRaw, convertFromRaw, EditorState, AtomicBlockUtils } from 'draft-js';

import {
  ItalicButton,
  BoldButton,
  UnderlineButton,
  // HeadlineOneButton,
  HeadlineTwoButton,
  HeadlineThreeButton,
  UnorderedListButton,
  OrderedListButton,
  CodeBlockButton,
  CodeButton,
  BlockquoteButton,
} from '@draft-js-plugins/buttons';

const emojiPlugin = createEmojiPlugin();
const { EmojiSuggestions, EmojiSelect } = emojiPlugin;

const inlineToolbarPlugin = createInlineToolbarPlugin({
  theme: { buttonStyles: buttonStyleInline, toolbarStyles: toolbarStyleInline },
});
const { InlineToolbar } = inlineToolbarPlugin;

const hashtagPlugin = createHashtagPlugin({
  theme: hashtagPluginTheme,
});

const focusPlugin = createFocusPlugin();
const resizeablePlugin = createResizeablePlugin();
const alignmentPlugin = createAlignmentPlugin();
const blockDndPlugin = createBlockDndPlugin();
const { AlignmentTool } = alignmentPlugin;

const decorator = composeDecorators(
  resizeablePlugin.decorator,
  blockDndPlugin.decorator,
  alignmentPlugin.decorator,
  focusPlugin.decorator,
);

const imagePlugin = createImagePlugin({ decorator });

const plugins = [
  blockDndPlugin,
  focusPlugin,
  resizeablePlugin,
  alignmentPlugin,
  inlineToolbarPlugin,
  emojiPlugin,
  hashtagPlugin,
  imagePlugin,
];

const initialState = {
  entityMap: {
    0: {
      type: 'IMAGE',
      mutability: 'IMMUTABLE',
      data: {
        src: 'https://picsum.photos/id/29/2000/1000/',
      },
    },
  },
  blocks: [
    {
      key: '9gm3s',
      text: 'You can have images in your text field. This is a very rudimentary example, but you can enhance the image plugin with resizing, focus or alignment plugins.',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
    {
      key: 'ov7r',
      text: ' ',
      type: 'atomic',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [
        {
          offset: 0,
          length: 1,
          key: 0,
        },
      ],
      data: {},
    },
    {
      key: 'e23a8',
      text: 'See advanced examples further down …',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
  ],
};

export default class SimpleSideToolbarEditor extends Component {
  state = {
    editorState: EditorState.createWithContent(convertFromRaw(this.props.raw) || convertFromRaw(initialState)),
  };

  componentDidMount() {
    this.setState({
      editorState: EditorState.createWithContent(convertFromRaw(this.props.raw) || convertFromRaw(initialState)),
    });
  }

  onChange = (editorState) => {
    const html = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    const raw = convertToRaw(editorState.getCurrentContent());
    this.props.renderData(html, raw);
    // console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    // console.log(convertToRaw(editorState.getCurrentContent()));
    console.log(raw);
    this.setState({
      editorState,
    });
  };

  insertImage = (url) => {
    const contentState = this.state.editorState.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity('IMAGE', 'IMMUTABLE', { src: url });
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const state = this.state.editorState;
    const newEditorState = EditorState.set(state, { currentContent: contentStateWithEntity });
    return AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, '');
  };

  handlePastedFiles = (url) => {
    this.setState({
      editorState: this.insertImage('https://picsum.photos/id/586/2000/1000/'),
    }); //created below
  };

  focus = () => {
    this.editor.focus();
  };

  render() {
    return (
      <>
        <div className="flex justify-end">
          <EmojiSelect />
        </div>
        <div className={`w-full h-800px max-h-[60vh] overflow-x-auto ${editorStyles.editor}`} onClick={this.focus}>
          <EmojiSuggestions />

          <Editor
            placeholder="Write your story here..."
            editorState={this.state.editorState}
            onChange={this.onChange}
            plugins={plugins}
            handlePastedFiles={this.handlePastedFiles}
            ref={(element) => {
              this.editor = element;
            }}
          ></Editor>
          <AlignmentTool />
          <InlineToolbar>
            {(externalProps) => (
              <div>
                <BoldButton {...externalProps} />
                <ItalicButton {...externalProps} />
                <UnderlineButton {...externalProps} />
                <HeadlineTwoButton {...externalProps} />
                <HeadlineThreeButton {...externalProps} />
                {/* <HeadlineOneButton {...externalProps} /> */}
                <UnorderedListButton {...externalProps} />
                <OrderedListButton {...externalProps} />
                <CodeBlockButton {...externalProps} />
                <BlockquoteButton {...externalProps} />
                <CodeButton {...externalProps} />
              </div>
            )}
          </InlineToolbar>
        </div>
      </>
    );
  }
}

// import '../../../node_modules/@draft-js-plugins/inline-toolbar/lib/plugin.css';
// import '../../../node_modules/@draft-js-plugins/side-toolbar/lib/plugin.css';
// import 'draft-js/dist/Draft.css';
// import '@draft-js-plugins/inline-toolbar/lib/plugin.css';

// import buttonStyles from './theme/side/buttonStyles.module.css';
// import toolbarStyles from './theme/side/toolbarStyles.module.css';
// import blockTypeSelectStyles from './theme/side/blockTypeSelectStyles.module.css';

// import buttonStyleInline from './theme/inlineToolbar/buttonStyles.module.css';
// import toolbarStyleInline from './theme/inlineToolbar/toolbarStyles.module.css';

// import React, { Component, useMemo, useRef, useState } from 'react';
// import Editor from '@draft-js-plugins/editor';
// import { EditorState } from 'draft-js';

// import createSideToolbarPlugin from '@draft-js-plugins/side-toolbar';
// import createInlineToolbarPlugin, { Separator } from '@draft-js-plugins/inline-toolbar';

// import editorStyles from './editorStyles.module.css';

// import { ItalicButton, BoldButton, UnderlineButton } from '@draft-js-plugins/buttons';

// export default function EditorCustom() {
//   const ref = useRef(null);
//   const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

//   const { plugins, InlineToolbar, SideToolbar } = useMemo(() => {
//     const inlineToolbarPlugin = createInlineToolbarPlugin({
//       // theme: { buttonStyles: buttonStyleInline, toolbarStyles: toolbarStyleInline },
//     });
//     const { InlineToolbar } = inlineToolbarPlugin;

//     const sideToolbarPlugin = createSideToolbarPlugin({
//       // position: 'right',
//       // theme: { buttonStyles, toolbarStyles, blockTypeSelectStyles },
//     });
//     const { SideToolbar } = sideToolbarPlugin;

//     const plugins = [sideToolbarPlugin, inlineToolbarPlugin];
//     return { plugins, InlineToolbar, SideToolbar };
//   }, []);

//   return (
//     <div
//       className={`w-[90%] max-h-[60vh] overflow-x-auto ${editorStyles.editor}`}
//       onClick={() => {
//         ref.current.focus();
//       }}
//     >
//       <Editor editorKey={'editor'} editorState={editorState} onChange={setEditorState} plugins={plugins} ref={ref}>
//         <SideToolbar />
//         <InlineToolbar>
//           {(externalProps) => (
//             <div>
//               <BoldButton {...externalProps} />
//               <ItalicButton {...externalProps} />
//               <UnderlineButton {...externalProps} />
//             </div>
//           )}
//         </InlineToolbar>
//       </Editor>
//     </div>
//   );
// }

// import React, { MouseEvent, ReactElement, useCallback, useMemo, useRef, useState } from 'react';
// import { EditorState } from 'draft-js';
// import Editor from '@draft-js-plugins/editor';
// import createMentionPlugin, {
//   defaultSuggestionsFilter,
//   MentionData,
//   MentionPluginTheme,
// } from '@draft-js-plugins/mention';
// import editorStyles from './CustomMentionEditor.module.css';
// import mentionsStyles from './MentionsStyles.module.css';
// import mentions from './Mentions.js';

// function Entry(props) {
//   const { mention, theme, searchValue, isFocused, ...parentProps } = props;

//   return (
//     <div {...parentProps}>
//       <div className={theme?.mentionSuggestionsEntryContainer}>
//         <div className={theme?.mentionSuggestionsEntryContainerLeft}>
//           <img src={mention.avatar} className={theme?.mentionSuggestionsEntryAvatar} role="presentation" />
//         </div>

//         <div className={theme?.mentionSuggestionsEntryContainerRight}>
//           <div className={theme?.mentionSuggestionsEntryText}>{mention.name}</div>

//           <div className={theme?.mentionSuggestionsEntryTitle}>{mention.title}</div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function CustomMentionEditor() {
//   const ref = useRef(null);
//   const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
//   const [open, setOpen] = useState(false);
//   const [suggestions, setSuggestions] = useState(mentions);

//   const { MentionSuggestions, plugins } = useMemo(() => {
//     const mentionPlugin = createMentionPlugin({
//       entityMutability: 'IMMUTABLE',
//       theme: mentionsStyles,
//       mentionPrefix: '@',
//       supportWhitespace: true,
//     });
//     // eslint-disable-next-line no-shadow
//     const { MentionSuggestions } = mentionPlugin;
//     // eslint-disable-next-line no-shadow
//     const plugins = [mentionPlugin];
//     return { plugins, MentionSuggestions };
//   }, []);

//   const onChange = useCallback((_editorState) => {
//     setEditorState(_editorState);
//   }, []);
//   const onOpenChange = useCallback((_open) => {
//     setOpen(_open);
//   }, []);
//   const onSearchChange = useCallback(({ value }) => {
//     setSuggestions(defaultSuggestionsFilter(value, mentions));
//   }, []);

//   return (
//     <div
//       className={editorStyles.editor}
//       onClick={() => {
//         ref.current.focus();
//       }}
//     >
//       <Editor editorKey={'editor'} editorState={editorState} onChange={onChange} plugins={plugins} ref={ref} />
//       <MentionSuggestions
//         open={open}
//         onOpenChange={onOpenChange}
//         suggestions={suggestions}
//         onSearchChange={onSearchChange}
//         onAddMention={() => {
//           // get the mention object selected
//         }}
//         entryComponent={Entry}
//         popoverContainer={({ children }) => <div>{children}</div>}
//       />
//     </div>
//   );
// }
