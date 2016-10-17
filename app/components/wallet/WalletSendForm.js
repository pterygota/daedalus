// @flow
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import styles from './WalletSendForm.scss';

@observer
export default class WalletSendForm extends Component {
  render() {
    return (
      <div className={styles.component}>

        <div className={styles.fields}>

          <TextField
            className={styles.textField}
            hintText="Bitcoin address"
            floatingLabelText="Receiver"
            floatingLabelFixed
            fullWidth
          />

          <TextField
            className={styles.textField}
            hintText="Amount in $"
            floatingLabelText="Amount"
            floatingLabelFixed
            fullWidth
          />

          <TextField
            className={styles.textField}
            hintText="You can add a message if you want"
            floatingLabelText="Description"
            floatingLabelFixed
            multiLine
            fullWidth
          />

        </div>

        <RaisedButton
          className={styles.sendButton}
          label="Send"
          primary
          fullWidth
        />

      </div>
    );
  }
}