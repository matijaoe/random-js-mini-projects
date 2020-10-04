import Highway from "@dogstudio/highway";
import { TimelineLite } from 'gsap';

class Fade extends Highway.Transition {
    in({ from, to, done }) {
        const tl = new TimelineLite();
        tl
            .fromTo(to, 0.5, { left: '-100%', top: '50%' }, { left: '0%' })
            .fromTo(to, 0.5, { height: '2vh' }, {
                height: '90vh', top: '10%', onComplete: () => {
                    from.remove(); // remove container we are on after page animation finish
                    done();
                }
            })
            .fromTo(to.children[0], 1, { opacity: 0 }, { opacity: 1 })
            .fromTo(to.children[0], 0.3, { scale: '0.95' }, { scale: '1' }, '-=1')
    }
    out({ from, done }) {
        // we can do animation for the page we're leaving
        done(); // call when done
    }
}

export default Fade;