import Head from 'next/head'
import { Fragment } from "react"

export default function Testpage(): JSX.Element {
	return (
		<Fragment>
			<Head>
				<title>Test page!</title>
			</Head>
			<div>
				Hello, I am test page!
			</div>
		</Fragment>
	)
}
