//
// AccountBalance.swift
//
// Generated by Konfig
// https://konfigthis.com
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

/** Balance of the account */
public struct AccountBalance: Codable, JSONEncodable, Hashable {

    public var total: AccountBalanceTotal?

    public init(total: AccountBalanceTotal? = nil) {
        self.total = total
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case total
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encodeIfPresent(total, forKey: .total)
    }
}

