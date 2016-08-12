import React from 'react'
import Header from './header'
import BetterHeader from './better-header'
import FormTextArea from './form-text-area'
import StylinButton from './stylin-button'
import ShowAndHider from './show-and-hider'
import BestList from './best-list'
import SpecialFilter from './special-filter'


class App extends React.Component {

  constructor() {
    this.state = {
      title:  'My Better App',
      formClasses: [ 'textarea-form', 'form' ], 
      buttonClasses: [ 'big', 'button' ],
      buttonStyle:  { backgroundColor: 'red', borderRadius: '5px' },
      options: [ 'yes', 'no', 'maybe' ],
      musketeers: [
        { text: 'Athos' },
        { text: 'Portos' },
        { text: 'Aramis' }
      ],
      animals: [
        { type: 'cat', name: 'tiger' },
        { type: 'dog', name: 'daschund' },
        { type: 'cat', name: 'panther' },
        { type: 'dog', name: 'labrador' },
        { type: 'cat', name: 'grumpy cat' }
      ]
    }
  }

  render() {
    return (
      <div>
        <Header />
        <BetterHeader title={this.state.title} />
        <FormTextArea formClasses={this.state.formClasses} buttonClasses={this.state.buttonClasses} />
        <StylinButton style={this.state.buttonStyle} />
        <ShowAndHider displayOptions={true} options={this.state.options} />
        <BestList items={this.state.musketeers} />  
        <SpecialFilter filter="cat" items={this.state.animals} />
      </div>
    )
  }
}

module.exports = App
