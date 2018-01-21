import React, { Component } from 'react'

import injectSheet from 'react-jss'
import { Font, Button, Route as RouteStyle} from '../Styles'

import { t } from '../i18n'

import Input from '../Input'
import Textarea from '../Textarea'

import { contact } from '../Data'

const style = {
  container: {
    ...RouteStyle.container,
    maxWidth: 500,
    justifyContent: 'left'
  },
  btn: {
    ...Button.btn,
    width: 90,
    height: 40,

    fontSize: 16,
    fontWeight: 600
  },

  phone: {
    font: {
      size: 20,
      weight: 400,
      family: Font.default
    },
    display: 'block',
    marginTop: 80,

    '& b': {
      paddingLeft: 15
    }
  },
  form: {
    width: '100%'
  },
  '@media(max-width: 1080px)': {
    container: {
      justifyContent: 'left',
      maxWidth: '100%',
      width: '80%'
    },
    'phone': {
      '& b': {
        display: 'block',
        padding: 0
      }
    }
  }
}

class Contact extends Component {

  constructor(props) {
    super(props)

    this.classes = props.classes

    this.state = {
      email: '',
      name: '',
      message: '',
      disabled: true
    }
  }

  onChangeInput = (field) => (ev) => {
    const state = {...this.state}
    state[field] = ev.target.value

    const { email, name, message } = state

    this.setState({
      ...state,
      disabled: !(email && name && message)
    })
  }

  onSubmit = (ev) => {
    ev.preventDefault()

    if(!this.state.disabled) {
      this.setState({
        message: ''
      })

      window.Email.send(
        this.state.email,
        contact.email,
        "Contato pelo site",
        this.state.message,
        'smtp.elasticemail.com',
        'andrey.dias@brave.ag',
        '2f74eaa2-987f-4f21-b908-719835a36353',
        () => alert('E-mail enviado, obrigado pelo contato.')
      )
    }
  }

  render() {
    return (
      <div className={this.classes.container}>
        <form onSubmit={ this.onSubmit } className={this.classes.form}>
          <Input
            className={this.classes.field}
            type='text'
            onChange={ this.onChangeInput('name') }
            placeholder={ t('Contact.InputName') }
            />

          <Input
            className={this.classes.field}
            type='email'
            onChange={ this.onChangeInput('email') }
            placeholder={ t('Contact.InputEmail') }
            />

          <Textarea
            className={this.classes.field}
            onChange={ this.onChangeInput('message') }
            placeholder={ t('Contact.InputMessage') }
            />

          <button
            disabled={ this.state.disabled }
            className={ this.classes.btn }>
            { t('Contact.ButtonSubmit') }
          </button>
        </form>

        <span className={ this.classes.phone }>{ t('Contact.Phone') } <b>({ contact.phone.DDD }) { contact.phone.number }</b></span>
      </div>
    )
  }
}

export default injectSheet(style)(Contact)
