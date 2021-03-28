import React from "react";

type CardProps = {
  title: string;
  className?: string;
};

class HiCard extends React.Component<CardProps, {}> {
  constructor(props: CardProps) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <div className={this.props.className}>
        <div className="shadow-2xl rounded-xl">
          <div className="p-3 text-xl text-white rounded-t-xl bg-amber-900">
            {this.props.title}
          </div>
          <div className="p-6 bg-white rounded-b-xl">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default HiCard;
