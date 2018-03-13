import React, { Component } from 'react'
import { Accordion, AccordionItem, Header, Footer } from './components';
import './index.scss'

export default class Demo extends Component {
  render () {
    return (
      <div className="u-flexbox-sticky">
        <Header title="Open Positions"/>
        <main className="u-flex-1">
          <Accordion>
            <AccordionItem title="FrontEnd Developer" description="..."></AccordionItem>
            <AccordionItem title="Backend Developer" description="..."></AccordionItem>
            <AccordionItem title="Product Owner" description="..."></AccordionItem>
          </Accordion>
        </main>
        <Footer/>
      </div>
    )
  }
}