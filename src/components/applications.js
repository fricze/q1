const Applications = () => {
  const useAllAps = useQuery("apps", getAllApps); // ['apps']

  const inactiveApps = useQuery(
    ["apps", { state: "inactive" }],
    getInactiveApps
  );

  const addAppMutation = useMutation(() => {
    addApp("app test1").then(() => getQuery("apps").invalidate());
  });

  const editAppMutation = useMutation((id) => {
    setRating({ id: 2, rating: 5 }).then(() =>
      getQuery(["apps", { id: 2 }]).invalidate()
    );
  });

  return {
    useAllAps,
    inactiveApps,
    addAppMutation,
    editAppMutation
  }
};