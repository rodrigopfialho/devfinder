import { Sun } from 'phosphor-react'
import {MagnifyingGlass} from 'phosphor-react'
import {Container, Content, Header, Card, Search} from './styled'
import Github from '../assets/github.png'

export function SearchGit() {
    return (
        <Container>
            <Content>
                <Header>
                    <h3>devfinder</h3>
                    <div>
                       <p>LIGHT</p>
                        <Sun size={26} />
                    </div>
                </Header>
                <Search>
                    <MagnifyingGlass size={32} />
                        <input 
                            type="text"
                            placeholder='Search GitHub username..' />

                        <button type='button'>
                            Search
                        </button>
                </Search>
                <Card>
                    <div>
                        <img 
                            src={Github}
                        />

                        <div>
                            <h1>The Octocat</h1>
                            <span className='profile'>@octocat</span>

                            <div className='bio'>
                                <span>This profile has no bio</span>
                            </div>
                        </div>

                        <strong className='data'>Join 25 jun 2011</strong>
                    </div>

                    <div className='info'>
                        <div>
                            <div className='repos infoData'>
                                <span>Repos</span>
                                <strong>8</strong>
                            </div>
                            <div className='followers infoData'>
                                <span>Followers</span>
                                <strong>3938</strong>
                            </div>
                            <div className='following infoData'>
                                <span>Following</span>
                                <strong>9</strong>
                            </div>
                        </div>
                    </div>
                </Card>
            </Content>
        </Container>
    )
}