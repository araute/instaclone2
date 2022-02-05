/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      email
      addresses
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        addresses
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        email
        addresses
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getFoodCategory = /* GraphQL */ `
  query GetFoodCategory($id: ID!) {
    getFoodCategory(id: $id) {
      id
      type
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      products {
        items {
          id
          name
          categoryID
          description
          primaryImage
          images
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const listFoodCategorys = /* GraphQL */ `
  query ListFoodCategorys(
    $filter: ModelFoodCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFoodCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        products {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncFoodCategories = /* GraphQL */ `
  query SyncFoodCategories(
    $filter: ModelFoodCategoryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFoodCategories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        type
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        products {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      name
      categoryID
      description
      primaryImage
      images
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      category {
        id
        type
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        products {
          nextToken
          startedAt
        }
      }
      atLocations {
        items {
          id
          locationID
          productID
          price
          Stock
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      atCarts {
        items {
          id
          userSub
          quantity
          price
          productID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        categoryID
        description
        primaryImage
        images
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        category {
          id
          type
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        atLocations {
          nextToken
          startedAt
        }
        atCarts {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncProducts = /* GraphQL */ `
  query SyncProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        categoryID
        description
        primaryImage
        images
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        category {
          id
          type
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        atLocations {
          nextToken
          startedAt
        }
        atCarts {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getLocation = /* GraphQL */ `
  query GetLocation($id: ID!) {
    getLocation(id: $id) {
      id
      name
      street
      unit
      city
      state
      zip
      phone
      latitude
      longitude
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      menuLocations {
        items {
          id
          locationID
          productID
          price
          Stock
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const listLocations = /* GraphQL */ `
  query ListLocations(
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        street
        unit
        city
        state
        zip
        phone
        latitude
        longitude
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        menuLocations {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncLocations = /* GraphQL */ `
  query SyncLocations(
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLocations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        street
        unit
        city
        state
        zip
        phone
        latitude
        longitude
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        menuLocations {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getLocationMenu = /* GraphQL */ `
  query GetLocationMenu($id: ID!) {
    getLocationMenu(id: $id) {
      id
      locationID
      productID
      price
      Stock
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      product {
        id
        name
        categoryID
        description
        primaryImage
        images
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        category {
          id
          type
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        atLocations {
          nextToken
          startedAt
        }
        atCarts {
          nextToken
          startedAt
        }
      }
      location {
        id
        name
        street
        unit
        city
        state
        zip
        phone
        latitude
        longitude
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        menuLocations {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const listLocationMenus = /* GraphQL */ `
  query ListLocationMenus(
    $filter: ModelLocationMenuFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLocationMenus(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        locationID
        productID
        price
        Stock
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        product {
          id
          name
          categoryID
          description
          primaryImage
          images
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        location {
          id
          name
          street
          unit
          city
          state
          zip
          phone
          latitude
          longitude
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncLocationMenus = /* GraphQL */ `
  query SyncLocationMenus(
    $filter: ModelLocationMenuFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLocationMenus(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        locationID
        productID
        price
        Stock
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        product {
          id
          name
          categoryID
          description
          primaryImage
          images
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        location {
          id
          name
          street
          unit
          city
          state
          zip
          phone
          latitude
          longitude
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getCartProduct = /* GraphQL */ `
  query GetCartProduct($id: ID!) {
    getCartProduct(id: $id) {
      id
      userSub
      quantity
      price
      productID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      product {
        id
        name
        categoryID
        description
        primaryImage
        images
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        category {
          id
          type
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        atLocations {
          nextToken
          startedAt
        }
        atCarts {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const listCartProducts = /* GraphQL */ `
  query ListCartProducts(
    $filter: ModelCartProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCartProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userSub
        quantity
        price
        productID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        product {
          id
          name
          categoryID
          description
          primaryImage
          images
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCartProducts = /* GraphQL */ `
  query SyncCartProducts(
    $filter: ModelCartProductFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCartProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userSub
        quantity
        price
        productID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        product {
          id
          name
          categoryID
          description
          primaryImage
          images
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getOrderProduct = /* GraphQL */ `
  query GetOrderProduct($id: ID!) {
    getOrderProduct(id: $id) {
      id
      quantity
      option
      productID
      orderID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      product {
        id
        name
        categoryID
        description
        primaryImage
        images
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        category {
          id
          type
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        atLocations {
          nextToken
          startedAt
        }
        atCarts {
          nextToken
          startedAt
        }
      }
      order {
        id
        userSub
        fullName
        phoneNumber
        country
        city
        address
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const listOrderProducts = /* GraphQL */ `
  query ListOrderProducts(
    $filter: ModelOrderProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        quantity
        option
        productID
        orderID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        product {
          id
          name
          categoryID
          description
          primaryImage
          images
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        order {
          id
          userSub
          fullName
          phoneNumber
          country
          city
          address
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncOrderProducts = /* GraphQL */ `
  query SyncOrderProducts(
    $filter: ModelOrderProductFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrderProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        quantity
        option
        productID
        orderID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        product {
          id
          name
          categoryID
          description
          primaryImage
          images
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        order {
          id
          userSub
          fullName
          phoneNumber
          country
          city
          address
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      userSub
      fullName
      phoneNumber
      country
      city
      address
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userSub
        fullName
        phoneNumber
        country
        city
        address
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncOrders = /* GraphQL */ `
  query SyncOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrders(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userSub
        fullName
        phoneNumber
        country
        city
        address
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
