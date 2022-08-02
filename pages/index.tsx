import {useEffect, useState} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Htag } from '../components'
import { Button } from '../components'
import { Paragraph } from '../components'
import { Tag } from '../components'
import { Rating } from '../components'
import { number } from "prop-types"

export default function Home(): JSX.Element {
	const clickBtn = (): void => {
		console.log('click')
	}

	const simpleParagraphStyle = {
		color: '#555'
	}

	const [counter, setCounter] = useState<number>(0)
	const [rating, setRating] = useState<number>(4)

	useEffect(() => {
		console.log('Counter ', + counter)
		return function cleanup () {
			console.log('Unmount')
		}
	}, [])
	useEffect(() => {
		console.log('Counter ', + counter)
		return function cleanup () {
			console.log('Unmount')
		}
	}, [])

	return (
		<div>
			<Htag tag='h1'>Hello!</Htag>
			<Htag tag='h1'>{ counter }</Htag>
			<Button
				appearance={'primary'}
				onClick={() => setCounter(x => x + 1)}
			>
				Increment counter
			</Button>
			<br/>
			<Button onClick={clickBtn} className={'indexpage-button'} appearance={'primary'}>primary button</Button>
			<Button arrow={'right'} appearance={'ghost'}>ghost button</Button>
			<Paragraph size={'small'}>Hello, i am small paragraph</Paragraph>
			<Paragraph size={'medium'}>Hello, i am medium paragraph</Paragraph>
			<Paragraph size={'large'}>Hello, i am large paragraph</Paragraph>
			<Paragraph
				className={'simple-paragraph'}
				style={simpleParagraphStyle}
			>
				Hello, ia ma just a paragraph without size attribute
			</Paragraph>
			<div>
				<Paragraph>This is tags:</Paragraph>
				<Tag>
					ghost tag
				</Tag>
				<Tag
					size={'small'}
					color={'primary'}
				>
					simple tag
				</Tag>
				<Tag
					size={'medium'}
					color={'red'}
				>
					simple tag
				</Tag>
				<Tag
					size={'medium'}
					color={'green'}
					href={'#'}
				>
					link tag
				</Tag>
			</div>
			<Rating
				rating={rating}
				isEditable={true}
				setRating={setRating}
			/>
		</div>
	)
}
