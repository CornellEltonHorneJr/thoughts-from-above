import Link from 'next/link'
import { supabase } from '@/lib/supabase'

export default async function Home(){
 let articles:any[]=[]
 if(supabase){const {data}=await supabase.from('articles').select('*,topics(name,slug)').eq('published',true).order('published_at',{ascending:false}).limit(9);articles=data||[]}
 return <main><section className="hero"><div><div className="eyebrow">A journal by Ms. Vazquez</div><h1>Thoughts<br/>From Above</h1><p>A place for faith, culture, stories, questions, and all the thoughts that deserve to be written down.</p></div><div className="hero-note">“Write what is on your heart. Let the words become a window into the way you see the world.”</div></section><section className="section"><div className="section-head"><h2>Latest thoughts</h2><span className="date">New writing, every week</span></div>{articles.length?<div className="article-grid">{articles.map(a=><Link className="card" href={`/article/${a.slug}`} key={a.id}>{a.cover_image?<img className="card-img" src={a.cover_image} alt=""/>:<div className="card-img"/>}<div className="card-body"><div className="topic">{a.topics?.name||'Thoughts'}</div><h3>{a.title}</h3><div className="excerpt">{a.excerpt}</div><div className="date">{new Date(a.published_at||a.created_at).toLocaleDateString()}</div></div></Link>)}</div>:<div className="empty">Your first published thought will appear here. Visit <Link href="/admin"><u>Write</u></Link> to add one.</div>}</section></main>
}
