import React from "react"
import { Link } from "gatsby"
import Title from '../Global/Title'

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story"></Title>
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              tempora perferendis excepturi, possimus debitis molestiae ipsa,
              rerum cupiditate voluptates perspiciatis natus dolorem eaque
              minima repudiandae. Cum deleniti iste eaque consequuntur? Tempore
              quibusdam qui debitis voluptates iusto alias? Ex numquam rerum
              distinctio, facere ipsum modi magni eaque. Iusto dolorem
              architecto quo!
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
