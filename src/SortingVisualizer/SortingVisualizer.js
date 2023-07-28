import React, {Component} from 'react';
import getMergeSortAnimations from '../SortingAlgorithms/mergeSort';
import quickSort from '../SortingAlgorithms/quickSort';
import bubbleSort from '../SortingAlgorithms/bubbleSort';
import heapSort from '../SortingAlgorithms/heapSort';
import getRandomNumberInterval from '../Helpers/getRandomNumberInterval';
import { AppBar, Toolbar,Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import BarsContainer from './BarsContainer';
import "../SortingVisualizer/SortingVisualizer.css"

const SPEED = 5;

class SortingVisualizer extends Component{
    constructor(props){
        super(props)
        this.state = {
            array: [],
            size: 30,
            inProgress: false
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        this.resetArray()
    }

    resetArray(){
        const array = [];
        for(let i = 0; i < this.state.size; i++){
            let randNum = getRandomNumberInterval(5,700);
            array.push(randNum);
        }
        this.setState({array});
    }

    mergeSort(){
        const animations = getMergeSortAnimations(this.state.array);
        const array_bar = document.getElementsByClassName("bars");
        console.log(animations)
        this.setState({inProgress:true})
        const done = (animations.length-1) * SPEED;
        for(let i = 0; i < animations.length ; i++){
        const changeColor = i % 3 != 2;
        if(changeColor){
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = array_bar[barOneIdx].style;
            const barTwoStyle = array_bar[barTwoIdx].style;
            const color = i % 3 === 0 ? "red" : "rgb(87, 160, 211)";
            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
            }, i * SPEED)
            }
        else{
            setTimeout(() => {
                const [barIdx, newHeight] = animations[i];
                const bar = array_bar[barIdx].style;
                bar.height = `${newHeight}px`;
                if((i * SPEED) == done){
                    this.setState({inProgress:false})
                }
            }, i * SPEED)
        }
        }
    }
    quickSort(){
        const animations = []
        const quickSortArr = quickSort(this.state.array, 0, this.state.array.length-1, animations)
        const array_bar = document.getElementsByClassName("bars");
        this.setState({inProgress:true})
        const done = (animations.length-1) * SPEED;
        let count = 0;
        for(let i = 0; i < animations.length; i++){
            const changeColor = animations[i].length % 3 === 0;
            if(changeColor){
                const [pivotBarIdx, barOneIdx, barTwoIdx] = animations[i];
                const pivotBarStyle = array_bar[pivotBarIdx].style;
                const barOneStyle = array_bar[barOneIdx].style;
                const barTwoStyle = array_bar[barTwoIdx].style;
                const pivotColor = count % 2 === 0? "pink": "rgb(87, 160, 211)";
                const color = count % 2 === 0? "red": "rgb(87, 160, 211)";
                setTimeout(() => {
                    pivotBarStyle.backgroundColor = pivotColor;
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * SPEED)
                count++;
            }
            else{
                setTimeout(() => {
                    const [barOneIdx, barOneNewHeight, barTwoIdx, barTwoNewHeight] = animations[i];
                    const barOne = array_bar[barOneIdx].style;
                    const barTwo = array_bar[barTwoIdx].style;
                    barOne.height = `${barOneNewHeight}px`;
                    barTwo.height = `${barTwoNewHeight}px`;
                    if((i * SPEED) == done){
                        this.setState({inProgress:false})
                    }
                }, i * SPEED);
            }
        }
    }
    bubbleSort(){
        const animations = bubbleSort(this.state.array);
        const array_bar = document.getElementsByClassName("bars");
        this.setState({inProgress:true})
        const done = (animations.length-1) * SPEED;
        let lastIdx = array_bar.length-1
        let count = 0;
        console.log(animations)
        for(let i = 0; i < animations.length ; i++){
            const changeColor = animations[i].length === 2;
            if(changeColor){
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = array_bar[barOneIdx].style;
                const barTwoStyle = array_bar[barTwoIdx].style;
                const color = count % 2 === 0 ? "red" : "rgb(87, 160, 211)";
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * SPEED)
                count++;
                }
            else{
                setTimeout(() => {
                    if(animations[i].length == 4){
                        const [barOneIdx, barOneNewHeight, barTwoIdx, barTwoNewHeight] = animations[i];
                        const barOne = array_bar[barOneIdx].style;
                        const barTwo = array_bar[barTwoIdx].style;
                        // const lastBar = array_bar[lastIdx].style;
                        barOne.height = `${barOneNewHeight}px`;
                        barTwo.height = `${barTwoNewHeight}px`;
                    }
                    else{
                        const lastBar = array_bar[lastIdx].style;
                        lastBar.backgroundColor = "rgb(182,95,207)";
                        lastIdx--;
                        if((i * SPEED) == done){
                            this.setState({inProgress:false})
                        }
                    }
                }, i * SPEED)
            }
    
        }
    }
    heapSort(){
        const animations = heapSort(this.state.array);
        const array_bar = document.getElementsByClassName("bars");
        this.setState({inProgress:true})
        const done = (animations.length-1) * SPEED;
        console.log(animations)
        let count = 0;
        for(let i = 0; i < animations.length; i++){
            const changeColor = animations[i].length === 2;
            if(changeColor){
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = array_bar[barOneIdx].style;
                const barTwoStyle = array_bar[barTwoIdx].style;
                const color = count % 2 === 0? "red": "rgb(87, 160, 211)";
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * SPEED)
                count++;
            }
            else{
                setTimeout(() => {
                    if(animations[i].length === 4){
                        const [barOneIdx, barOneNewHeight, barTwoIdx, barTwoNewHeight] = animations[i];
                        const barOne = array_bar[barOneIdx].style;
                        const barTwo = array_bar[barTwoIdx].style;
                        barOne.height = `${barOneNewHeight}px`;
                        barTwo.height = `${barTwoNewHeight}px`;
                    }
                    else{
                        const [lastBarIdx, lastBarNewHeight] = animations[i];
                        const lastBar = array_bar[lastBarIdx].style;
                        lastBar.backgroundColor = "rgb(182,95,207)";
                        if((i * SPEED) == done){
                            this.setState({inProgress:false})
                        }
                    }
                }, i * SPEED);
            }
        }
    }
    handleChange(event, newValue){
        this.setState({size : newValue});
        this.resetArray();
        console.log(newValue);
    }
    render(){
        // const {array} = this.state
        // let bars = []
        // array.map((value, idx) => {
        //     bars.push(<div 
        //         className="bars"
        //         key={idx}
        //         style={{height : `${value}px`}}></div>)
        // })
        let inProgress = this.state.inProgress;
        return(
            <div>
                <AppBar position="static" color="inherit">
                    <Toolbar variant="dense">
                        <Typography variant="h6" color="inherit" component="div">
                        Sorting Visualizer
                        </Typography>
                        <Box width={300} marginLeft="5%">
                            <Slider
                                aria-label="Temperature"
                                defaultValue={this.state.size}
                                color="secondary"
                                step={10}
                                min={10}
                                max={250}
                                onChangeCommitted={this.handleChange}
                                disabled={inProgress}
                            />
                        </Box>
                        <Stack direction="row" spacing={2} marginLeft="auto">
                            <Button variant="outlined" onClick={() => this.resetArray()} disabled={inProgress}>Generate New Array</Button>
                            <Button variant="outlined" onClick={() => this.mergeSort()} disabled={inProgress}>
                                Merge Sort
                            </Button>
                            <Button variant="outlined" onClick={() => this.quickSort()} disabled={inProgress}>
                                Quick Sort
                            </Button>
                            <Button variant="outlined" onClick={() => this.bubbleSort()} disabled={inProgress}>
                                Bubble Sort
                            </Button>
                            <Button variant="outlined" onClick={() => this.heapSort()} disabled={inProgress}>
                                Heap Sort
                            </Button>
                        </Stack>

                    </Toolbar>
                </AppBar>
                <div id="container">
                    {/* {bars} */}
                    <BarsContainer array={this.state.array}></BarsContainer>
                    {/* <button onClick={() => this.resetArray()}>Generate New Array</button> */}
                    {/* <button onClick={() => this.mergeSort()}>Merge Sort</button> */}
                    {/* <button onClick={() => this.quickSort()}>Quick Sort</button> */}
                    {/* <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
                    <button onClick={() => this.heapSort()}>Heap Sort</button> */}
                </div>
            </div>
        )
    }
}

export default SortingVisualizer;