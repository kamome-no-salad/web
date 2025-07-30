function NoMatch() {
  window.scrollTo({top: 0, behavior: "instant"});
  return <h2>このページは存在しません。</h2>;
}

export default NoMatch;