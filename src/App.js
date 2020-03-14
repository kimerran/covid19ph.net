import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { withStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import * as MUI from '@material-ui/core'

const mainLinks = require('./data/main_links.json')

const styles = theme => ({
});

class App extends Component {
  constructor(props) {
    super(props)
    this.classes = props.classes
  }
  render() {
    return <React.Fragment>
      <CssBaseline />
      <MUI.Container>
      <MUI.TableContainer component={MUI.Paper}>
          <MUI.Table className={this.classes.table} size="small" aria-label="simple table">
            <MUI.TableHead>
              <MUI.TableRow>
                <MUI.TableCell><strong>Title</strong></MUI.TableCell>
                <MUI.TableCell><strong>Category</strong></MUI.TableCell>
              </MUI.TableRow>
            </MUI.TableHead>
            <MUI.TableBody>
              {mainLinks.map(row => (
                <MUI.TableRow key={row.title}>
                  <MUI.TableCell><a href={row.url} target="_blank" rel="noopener noreferrer">{row.title}</a></MUI.TableCell>
                  <MUI.TableCell>{row.category}</MUI.TableCell>
                </MUI.TableRow>
              ))}
            </MUI.TableBody>
          </MUI.Table>
        </MUI.TableContainer>
    </MUI.Container>
    </React.Fragment>
  }
}

function mapStateToProps(state) {
  return {
    sample: state.sample
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
  }, dispatch);
}

export default
  connect(mapStateToProps, matchDispatchToProps)
  (withStyles(styles)(App));
