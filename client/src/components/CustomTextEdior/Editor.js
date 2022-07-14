import React, { useState } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import justify from './Image/align_justify.svg';
import center from './Image/align_center.svg';
import left from './Image/align_left.svg';
import right from './Image/align_right.svg';

const classNameBtn = `bg-lightBtn dark:bg-darkBtn 
text-textPrimaryLight dark:text-textPrimaryDark 
hover:bg-lightHoverIcon dark:hover:bg-darkHoverIcon 
outline-none hover:!shadow-none active:!shadow-none
!border-0 hover:!border-0 active:border-0
`;

const backgroundColor = `bg-lightBtn dark:bg-darkBtn text-textPrimaryLight dark:text-textPrimaryDark hover:bg-lightHoverIcon dark:hover:bg-darkHoverIcon`;

const EditorCustom = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleOnChange = (editorState) => {
    console.log(convertToRaw(editorState.getCurrentContent()));
    setEditorState(editorState);
  };

  return (
    <div>
      <Editor
        placeholder="Nhập nội dung bài viết..."
        editorStyle={{
          minHeight: '300px',
        }}
        toolbar={{
          inline: {
            className: 'dark:bg-darkSecondary bg-lightSecondary',
            dropdownClassName: 'dark:bg-darkSecondary bg-lightSecondary',
            options: ['bold', 'italic', 'underline', 'strikethrough', 'monospace', 'superscript', 'subscript'],
            bold: {
              className: classNameBtn,
            },
            italic: {
              className: classNameBtn,
            },
            underline: {
              className: classNameBtn,
            },
            strikethrough: {
              className: classNameBtn,
            },
            monospace: {
              className: classNameBtn,
            },
            superscript: {
              className: classNameBtn,
            },
            subscript: {
              className: classNameBtn,
            },
          },
          textAlign: {
            inDropdown: false,
            options: ['left', 'center', 'right', 'justify'],
            left: { icon: left, className: classNameBtn },
            center: { icon: center, className: classNameBtn },
            right: { icon: right, className: classNameBtn },
            justify: {
              icon: justify,
              className: classNameBtn,
            },
          },
          list: {
            inDropdown: false,
            options: ['unordered', 'ordered', 'indent', 'outdent'],
            unordered: { className: classNameBtn },
            ordered: { className: classNameBtn },
            indent: { className: classNameBtn },
            outdent: { className: classNameBtn },
          },
          colorPicker: {
            className: backgroundColor + ' ',
            popupClassName: backgroundColor + ' !w-[200px] !left-[-300%]',
            colors: [
              'rgb(97,189,109)',
              'rgb(26,188,156)',
              'rgb(84,172,210)',
              'rgb(44,130,201)',
              'rgb(147,101,184)',
              'rgb(71,85,119)',
              'rgb(204,204,204)',
              'rgb(65,168,95)',
              'rgb(0,168,133)',
              'rgb(61,142,185)',
              'rgb(41,105,176)',
              'rgb(85,57,130)',
              'rgb(40,50,78)',
              'rgb(0,0,0)',
              'rgb(247,218,100)',
              'rgb(251,160,38)',
              'rgb(235,107,86)',
              'rgb(226,80,65)',
              'rgb(163,143,132)',
              'rgb(239,239,239)',
              'rgb(255,255,255)',
              'rgb(250,197,28)',
              'rgb(243,121,52)',
              'rgb(209,72,65)',
              'rgb(184,49,47)',
              'rgb(124,112,107)',
              'rgb(209,213,216)',
            ],
          },
          link: {
            inDropdown: false,
            dropdownClassName: backgroundColor,
            className: backgroundColor + ' ',
            popupClassName: backgroundColor + ' !w-[250px] !left-[-300%]',
            showOpenOptionOnHover: true,
            defaultTargetOption: '_self',
            options: ['link', 'unlink'],
            link: { className: classNameBtn },
            unlink: { className: classNameBtn },
          },
          emoji: {
            className: backgroundColor + ' ',
            popupClassName: backgroundColor + ' !w-[200px] !left-[-300%]',
            emojis: [
              '😀',
              '😁',
              '😂',
              '😃',
              '😉',
              '😋',
              '😎',
              '😍',
              '😗',
              '🤗',
              '🤔',
              '😣',
              '😫',
              '😴',
              '😌',
              '🤓',
              '😛',
              '😜',
              '😠',
              '😇',
              '😷',
              '😈',
              '👻',
              '😺',
              '😸',
              '😹',
              '😻',
              '😼',
              '😽',
              '🙀',
              '🙈',
              '🙉',
              '🙊',
              '👼',
              '👮',
              '🕵',
              '💂',
              '👳',
              '🎅',
              '👸',
              '👰',
              '👲',
              '🙍',
              '🙇',
              '🚶',
              '🏃',
              '💃',
              '⛷',
              '🏂',
              '🏌',
              '🏄',
              '🚣',
              '🏊',
              '⛹',
              '🏋',
              '🚴',
              '👫',
              '💪',
              '👈',
              '👉',
              '👉',
              '👆',
              '🖕',
              '👇',
              '🖖',
              '🤘',
              '🖐',
              '👌',
              '👍',
              '👎',
              '✊',
              '👊',
              '👏',
              '🙌',
              '🙏',
              '🐵',
              '🐶',
              '🐇',
              '🐥',
              '🐸',
              '🐌',
              '🐛',
              '🐜',
              '🐝',
              '🍉',
              '🍄',
              '🍔',
              '🍤',
              '🍨',
              '🍪',
              '🎂',
              '🍰',
              '🍾',
              '🍷',
              '🍸',
              '🍺',
              '🌍',
              '🚑',
              '⏰',
              '🌙',
              '🌝',
              '🌞',
              '⭐',
              '🌟',
              '🌠',
              '🌨',
              '🌩',
              '⛄',
              '🔥',
              '🎄',
              '🎈',
              '🎉',
              '🎊',
              '🎁',
              '🎗',
              '🏀',
              '🏈',
              '🎲',
              '🔇',
              '🔈',
              '📣',
              '🔔',
              '🎵',
              '🎷',
              '💰',
              '🖊',
              '📅',
              '✅',
              '❎',
              '💯',
            ],
          },
          embedded: {
            className: backgroundColor + ' ',
            popupClassName: backgroundColor + ' !w-[200px] !left-[-300%]',
            defaultSize: {
              height: 'auto',
              width: 'auto',
            },
          },
          image: {
            className: backgroundColor + ' ',
            popupClassName: backgroundColor + ' !w-[220px] !left-[-600%]',
            urlEnabled: true,
            uploadEnabled: true,
            alignmentEnabled: true,
            previewImage: false,
            inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
            alt: { present: false, mandatory: false },
            defaultSize: {
              height: 'auto',
              width: 'auto',
            },
          },
          remove: {
            className: backgroundColor,
          },
          history: {
            inDropdown: false,
            options: ['undo', 'redo'],
            undo: {
              className: backgroundColor,
            },
            redo: {
              className: backgroundColor,
            },
          },
          blockType: {
            inDropdown: true,
            options: ['Normal', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'Blockquote', 'Code'],
            className: backgroundColor,
            dropdownClassName: backgroundColor,
          },
          fontSize: {
            options: [8, 9, 10, 11, 12, 14, 16, 18, 24, 30],
            className: backgroundColor,
            dropdownClassName: backgroundColor,
          },
          fontFamily: {
            options: ['Arial', 'Georgia', 'Impact', 'Tahoma', 'Times New Roman', 'Verdana'],
            className: backgroundColor,
            dropdownClassName: backgroundColor,
          },
        }}
        editorState={editorState}
        toolbarClassName=" dark:bg-darkSecondary bg-lightSecondary !border-0"
        wrapperClassName="dark:bg-darkSecondary bg-lightSecondary "
        editorClassName="dark:bg-darkSecondary bg-lightSecondary "
        onEditorStateChange={handleOnChange}
        mention={{
          separator: ' ',
          trigger: '@',
          suggestions: [
            { text: 'APPLE', value: 'apple', url: 'apple' },
            { text: 'BANANA', value: 'banana', url: 'banana' },
            { text: 'CHERRY', value: 'cherry', url: 'cherry' },
            { text: 'DURIAN', value: 'durian', url: 'durian' },
            { text: 'EGGFRUIT', value: 'eggfruit', url: 'eggfruit' },
            { text: 'FIG', value: 'fig', url: 'fig' },
            { text: 'GRAPEFRUIT', value: 'grapefruit', url: 'grapefruit' },
            { text: 'HONEYDEW', value: 'honeydew', url: 'honeydew' },
          ],
        }}
      />
    </div>
  );
};

export default EditorCustom;
