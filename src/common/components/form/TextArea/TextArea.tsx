import { TextAreaProps } from './TextArea.types';

import styles from './TextArea.module.scss';

function TextArea({
  cols = 50,
  rows = 10,
  ...textAreaRestProps
}: TextAreaProps) {
  return (
    <textarea
      {...textAreaRestProps}
      cols={cols}
      rows={rows}
      autoComplete="off"
      className={styles['text-area']}
    />
  );
}

export default TextArea;
