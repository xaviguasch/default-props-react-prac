class Hello extends React.Component {
  static defaultProps = {
    from: 'Joel',
    bangs: 1
  }
  render() {
    const { to, from, bangs } = this.props
    let bangsRepeated = '!'.repeat(this.props.bangs)
    return (
      <div>
        <p>
          Hi {to} from {from}
          {bangsRepeated}
        </p>
      </div>
    )
  }
}
