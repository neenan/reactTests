

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import SearchInput, { createFilter } from 'react-search-input'
import InfiniteScroll from 'react-infinite-scroll-component';
import Search from 'react-search'
import ReactDOM from 'react-dom'
import Highlight from 'react-highlighter';
const KEYS_TO_FILTERS = ['text']

export default class Cards extends React.Component {
    constructor(props) {
        super(props); this.state = {
            data: [
                {
                    id: 1,
                    test: 'one',
                    text: "Lorem ipsum dolor ONE sit amet, javascript consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio."
                },
                {
                    id: 2,
                    test: 'two',
                    text: "Lorem ipsum dolor TWO sit amet, javascript consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio."
                },
                {
                    id: 3,
                    test: 'three',
                    text: "Lorem ipsum dolor Three sit amet, javascript consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio."
                },
                {
                    id: 4,
                    test: 'four',
                    text: "Lorem ipsum dolor SEARCH four sit amet, javascript consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio."
                },
                {
                    id: 5,
                    test: 'two',
                    text: "Lorem ipsum dolor SEARCH five sit amet, javascript consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio."
                },
                {
                    id: 6,
                    test: 'three',
                    text: "Lorem ipsum dolor SEARCH six sit amet, javascript consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio."
                },
                {
                    id: 7,
                    test: 'seven',
                    text: "Lorem ipsum dolor seven sit amet, javascript consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio."
                },
                {
                    id: 8,
                    test: 'eight',
                    text: "Lorem ipsum dolor eight sit amet, javascript consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio."
                },
                {
                    id: 9,
                    test: 'nine',
                    text: "Lorem ipsum dolor nine sit amet, javascript consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio."
                },
                {
                    id: 10,
                    test: 'ten',
                    text: "Lorem ipsum dolor SEARCH ten sit amet, javascript consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio."
                },
                {
                    id: 11,
                    test: 'eleven',
                    text: "Lorem ipsum dolor SEARCH eleven sit amet, javascript consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio."
                },
                {
                    id: 12,
                    test: 'twelve',
                    text: "Lorem ipsum dolor SEARCH twelve sit amet, javascript consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio."
                },
                {
                    id: 13,
                    test: 'thirteen',
                    text: "Lorem ipsum dolor thirteen sit amet, javascript consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio."
                },
                {
                    id: 14,
                    test: 'fourteen',
                    text: "Lorem ipsum dolor fourteen sit amet, javascript consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio."
                },
                {
                    id: 15,
                    test: 'fifteen',
                    text: "Lorem ipsum dolor fifteen sit amet, javascript consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio."
                },
                {
                    id: 16,
                    test: 'sixteen',
                    text: "Lorem ipsum dolor SEARCH sixteen sit amet, javascript consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio."
                },
                {
                    id: 17,
                    test: 'seventeen',
                    text: "Lorem ipsum dolor SEARCH seventeen sit amet, javascript consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio."
                },
                {
                    id: 18,
                    test: 'eighteen',
                    text: "Lorem ipsum dolor SEARCH eighteen sit amet, javascript consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio."
                },
                               {
                    id: 19,
                    test: 'nineteen',
                    text: "Lorem ipsum dolor nineteen sit amet, javascript consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio."
                },
                {
                    id: 20,
                    test: 'twenty',
                    text: "Lorem ipsum dolor twenty sit amet, javascript consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio."
                },
                {
                    id:21,
                    test: 'twentyone',
                    text: "Lorem ipsum dolor twentyone sit amet, javascript consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio."
                },
                {
                    id: 22,
                    test: 'twentytwo',
                    text: "Lorem ipsum dolor SEARCH twentytwo sit amet, javascript consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio."
                }
            ],
            searchTerm: ''
        };
        this.searchUpdated = this.searchUpdated.bind(this)
    }

    searchUpdated(term) {
        this.setState({ searchTerm: term })
    }
    render() {
        const filteredCards = this.state.data.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
        const { classes } = this.props;
      
        return (
            <div>
                <SearchInput className="search-input" onChange={this.searchUpdated} style={{margin: "20px", textAlign: "center"}}/>

                {filteredCards.map(card => {
                    return (<Card style={{backgroundColor: "#008080", width: "60%", margin: 'auto', marginBottom: "10px", textAlign: "left"}}>
                        <CardHeader
                            title={card.id}
                            actAsExpander={true}
                            showExpandableButton={true}
                        />
                        <CardText expandable={true} style={{backgroundColor: "#FFF", color:"#000"}}>
                            {card.text}
                        </CardText>
                    </Card>
                    )
                })}

                {/* <InfiniteScroll
                    pullDownToRefresh
                    pullDownToRefreshContent={
                        <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
                    }
                    releaseToRefreshContent={
                        <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
                    }
                    refreshFunction={this.refresh}
                    next={}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }>
                    {items}
                </InfiniteScroll> */}

            </div>
        );
    }

}
