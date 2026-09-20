const steps = ['Question', 'Build a reproducible pipeline', 'Evaluate on real and synthetic data', 'Analyze failure cases', 'Improve the method', 'Connect perception to action']

export function Workflow() {
  return <div className="workflow">{steps.map((step, index) => <div className="workflow-step" key={step}><span>{String(index + 1).padStart(2, '0')}</span><strong>{step}</strong>{index < steps.length - 1 && <i aria-hidden="true">→</i>}</div>)}</div>
}