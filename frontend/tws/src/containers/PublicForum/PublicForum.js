import React, {Component} from 'react';
import ForumTabs from '../../components/ForumTabs/ForumTabs';

import { withCookies } from 'react-cookie';
import { Spinner, ButtonToolbar, Row, Col, Tab, Card, Button, Accordion } from 'react-bootstrap';

import ForumPosts from '../../components/ForumPosts/ForumPosts';
import ForumButton from '../../components/ForumButton/ForumButton';
import WordCloud from '../../components/Visuals/WordCloud/WordCloud';

class PublicForum extends Component {

  state = {
    currTab: "flex",
    title: '',
    description: '',
    category: 'flex',
    flexposts: [],
    dietposts: [],
    cardioposts: [],
    weightposts: [],
    token: this.props.cookies.get('tws-token')

  }

  componentDidMount() {
      fetch(`${process.env.REACT_APP_API_URL}/api/top3flexforums/`, {
        method: 'GET',
        headers: {
          'Authorization': `Token ${this.state.token}`
        }
      }).then( resp => resp.json())
      .then( res => this.setState({flexposts: res}))
      .catch( error => console.log(error))

      fetch(`${process.env.REACT_APP_API_URL}/api/top3dietforums/`, {
        method: 'GET',
        headers: {
          'Authorization': `Token ${this.state.token}`
        }
      }).then( resp => resp.json())
      .then( res => this.setState({dietposts: res}))
      .catch( error => console.log(error))

      fetch(`${process.env.REACT_APP_API_URL}/api/top3cardioforums/`, {
        method: 'GET',
        headers: {
          'Authorization': `Token ${this.state.token}`
        }
      }).then( resp => resp.json())
      .then( res => this.setState({cardioposts: res}))
      .catch( error => console.log(error))

      fetch(`${process.env.REACT_APP_API_URL}/api/top3weightforums/`, {
        method: 'GET',
        headers: {
          'Authorization': `Token ${this.state.token}`
        }
      }).then( resp => resp.json())
      .then( res => this.setState({weightposts: res}))
      .catch( error => console.log(error))
  }

  changeTabs = tab =>  {
      this.setState({currTab: tab});
  }

  updateTitle = title =>  {
      this.setState({
        title: title
      });
  }

  updateDesc = desc =>  {
    this.setState({
        description: desc
    });
  }

  updateCat = event => {
    console.log(event.target.name)
    this.setState({
      category: event.target.name
    });
  }

  formSubmitted = () => {
    let postBody = {
      title: this.state.title,
      caption: this.state.description,
      user: this.props.cookies.get('tws-id'),
      category: this.state.category
    }


    fetch(`${process.env.REACT_APP_API_URL}/api/forumposts/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${this.state.token}`
      },
      body: JSON.stringify(postBody)
    }).then( resp => resp.json())
    .then( res => console.log(res))
    .catch( error => console.log(error))

  }

render() {

    let content;
    if(this.state.currTab==="flex")
    {
      content = this.state.flexposts
    }else if (this.state.currTab==="diet")
    {
      content = this.state.dietposts
    }else if (this.state.currTab==="cardio")
    {
      content = this.state.cardioposts
    }else if (this.state.currTab==="weight")
    {
      content = this.state.weightposts
    }

    return (
        <div>
          <div style={styles.forum}>
            <ForumTabs
            changeTabs={this.changeTabs} act={this.state.currTab}/>
          </div>
          <div style={styles.forbutton}>
            <ForumButton  formSubmitted={this.formSubmitted}
            updateDesc={this.updateDesc}
            updateTitle={this.updateTitle}
            post={this.state.newPost}
            updateCat={this.updateCat}
            />
          </div>
          <Row>
            <Col >
                  <WordCloud/>
            </Col>
            <Col>
              <Accordion  defaultActiveKey="0">
                  <Card style={styles.contentCard}>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Popular Forum Questions This Month
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>
                    { ((this.state.flexposts[0] && this.state.currTab==="flex")
                    || (this.state.dietposts[0] && this.state.currTab==="diet")
                    || (this.state.currTab==="cardio" && this.state.cardioposts[0])
                    || (this.state.currTab==="weight"&& this.state.weightposts[0]))
                       ? <ForumPosts forumposts={content}/>
                          :  <div style={styles.spinners}> <Spinner  animation="border" variant="success" /> </div>
                    }
                    </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        Recent Forum Questions
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>Hello! I'm another body</Card.Body>
                    </Accordion.Collapse>
                  </Card>
              </Accordion>
            </Col>
          </Row>
        </div>
    );
  }
}

export default withCookies(PublicForum);

const styles = {
    forum: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    forbutton: {
        display: 'flex',
        justifyContent: 'center'
    },
    spinners: {
      display: "flex",
      justifyContent: "center"
    }
};
