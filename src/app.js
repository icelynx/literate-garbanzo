import React from 'react'
import {Route, Switch} from 'react-router-dom'
import ErrorBoundary from './error/errorBoundary'
import Event from './event/event'
import Menu from './menu/menu'
import Content from './ui/layout/content'
import Footer from './ui/layout/footer'
import Header from './ui/layout/header'

const App = () => (
  <div>
    <Header />
    <Content>
      <ErrorBoundary>
        <Switch>
          <Route exact path="/" component={Menu} />
          <Route exact path="/event" component={Event} />
          <Route component={() => (<div>Nothing to see, move along</div>)} />
        </Switch>
      </ErrorBoundary>
    </Content>
    <Footer />
  </div>
)

export default App