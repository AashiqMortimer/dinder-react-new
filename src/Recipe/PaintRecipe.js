export default function PaintRecipe({ steps, ingred, meal }) {

    var i = 1;
    return (
        <div className='chatScreen'>
            {steps.map(step =>
                <li className='chatBubble' key={step}>Step {i++}. {step}</li>)
            }
        </div>)
}